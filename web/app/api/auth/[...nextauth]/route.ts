import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			type: 'credentials',
			name: 'Credentials',
			credentials: {
				email: { label: 'email', type: 'email' },
				password: { label: 'password', type: 'password' }
			},

			async authorize(credentials, req) {
				const api = process.env.NEXT_PUBLIC_API_URL;
				const response = await fetch(`${api}/api/login`, {
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
						email: credentials?.email,
						password: credentials?.password
					})
				});

				console.log(response);
				const data = await response.json();


				if (data.status === 'success') {
					// Sesuaikan dengan struktur respons API Anda
					return {
						id: data.user.id,
						name: data.user.name,
						email: data.user.email,
						username: data.user.username,
						accessToken: data.user.accessToken,
						type: data.user.type,
					};
				}


				return null;


				// const { email, password } = credentials as {
				// 	email: string;
				// 	password: string;
				// };
				// const user: any = {
				// 	id: 1,
				// 	email: email,
				// 	password: password
				// }
				// if (user) {
				// 	console.log(user);
				// 	return user
				// } else {
				// 	return null
				// }
			},
		})
	],
	// pages: {
	// 	signIn: '/login'
	// },
	callbacks: {
		async jwt({ token, user }) {
			// Pastikan Anda mengembalikan token dengan benar
			return { ...token, ...user };
		},
		async session({ session, token, user }) {
			// Pastikan Anda mengembalikan sesi dengan benar
			session.user = token as any;
			return session;
		},
	},
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
