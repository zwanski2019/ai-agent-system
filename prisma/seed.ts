import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Create test contacts
  const contacts = await Promise.all([
    prisma.contact.create({
      data: {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "+1234567890",
        company: "Acme Inc",
        title: "CEO",
        source: "LinkedIn",
        status: "lead",
        tags: ["tech", "startup"],
      },
    }),
    prisma.contact.create({
      data: {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        phone: "+1987654321",
        company: "Tech Corp",
        title: "CTO",
        source: "Email",
        status: "qualified",
        tags: ["enterprise", "tech"],
      },
    }),
  ])

  // Create test calendar events
  const events = await Promise.all([
    prisma.calendarEvent.create({
      data: {
        title: "Sales Meeting",
        description: "Discuss Q4 targets",
        startTime: new Date("2024-01-10T10:00:00Z"),
        endTime: new Date("2024-01-10T11:00:00Z"),
        attendees: ["john@example.com", "jane@example.com"],
        location: "Virtual",
      },
    }),
  ])

  console.log({ contacts, events })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

