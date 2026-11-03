import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
const config: NextConfig = {};
initOpenNextCloudflareForDev();
export default config;
