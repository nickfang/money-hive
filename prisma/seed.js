// prisma/seed.ts

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)

  const nick = await prisma.user.upsert({
    where: { email: 'n@n.com' },
    update: {},
    create: {
      email: 'n@n.com',
      first_name: 'Nick',
      last_name: 'Fang',
    },
  })

  const cell = await prisma.cell.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Cell 1',
      user_id: nick.id,
      description: 'Cell 1',
      total: 1000,
    },
  })

  const transaction = await prisma.transaction.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Initial deposit',
      user_id: nick.id,
      cell_id: cell.id,
      amount: 1000,
      description: 'Initial deposit',
      category: 'DEPOSIT',
    },
  })

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })