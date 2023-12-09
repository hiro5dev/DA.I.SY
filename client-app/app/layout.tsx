"use client"
import { useEffect, useState } from "react"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

import "@rainbow-me/rainbowkit/styles.css"

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi"
import { sepolia, hardhat, localhost } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, sepolia, hardhat, localhost],
    [publicProvider()]
)

const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    projectId: "YOUR_PROJECT_ID",
    chains,
})

const config = createConfig({
    autoConnect: true,
    publicClient,
    webSocketPublicClient,
    connectors,
})
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    return (
        <html lang="en">
            <body className={inter.className}>
                <WagmiConfig config={config}>
                    <RainbowKitProvider chains={chains}>
                        <ThemeProvider
                            attribute="class"
                            defaultTheme="system"
                            enableSystem
                            disableTransitionOnChange
                        >
                            {mounted && children}
                        </ThemeProvider>
                    </RainbowKitProvider>
                </WagmiConfig>
            </body>
        </html>
    )
}
