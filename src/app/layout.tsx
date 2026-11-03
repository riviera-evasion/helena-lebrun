import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
export const metadata: Metadata = { metadataBase:new URL(siteUrl), title:{default:"Riviera Évasion — Le goût de l'évasion",template:"%s | Riviera Évasion"}, description:"Inspirations, destinations et conseils pour voyager plus souvent depuis Nice et la Côte d'Azur.", openGraph:{type:"website",locale:"fr_FR",siteName:"Riviera Évasion"} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="fr"><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>; }
