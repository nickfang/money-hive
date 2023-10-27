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

  const transaction = await prisma.transactions.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Initial deposit',
      user_id: nick.id,
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