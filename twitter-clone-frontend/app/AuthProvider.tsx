"use client";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<GoogleOAuthProvider
			clientId="922998767103-nm119ckg87v9cgso76rb55h8mgddoog6.apps.googleusercontent.com"
		>
			{children}
		</GoogleOAuthProvider>
	);
};
