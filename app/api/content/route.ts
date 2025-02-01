import { AgentOrchestrator } from "../../../orchestrator"
import { NextResponse } from "next/server"
import type { ContentItem } from "../../../types/content"

export async function POST(req: Request) {
  try {
    const orchestrator = new AgentOrchestrator()
    const content: ContentItem = await req.json()

    await orchestrator.createContent(content)

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create content" }, { status: 500 })
  }
}

