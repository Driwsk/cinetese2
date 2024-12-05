"use client";
import { redirect } from "next/navigation";

 
export const NavigationToCatalogo = () => {
  return redirect("/FrontEnd/catalogo");}

export const NavigationToHome = () => {
  return redirect("/");
};

export const NavigationToLogin = () => {
  return redirect("/FrontEnd/loginForm");
};