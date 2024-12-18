import { useMemo } from 'react'
import { Card, CardContent } from '../components/ui/card'
import useSWR from 'swr'
import { Skeleton } from '../components/ui/skeleton'

const sheetUrl =
    'https://script.google.com/macros/s/AKfycbxsTJbXgyfI0XYu8NMSR1md9eHgA_r9nXFtPo05_JhPr4oq1u0vTCqgdqNCfLVX5POx/exec'

interface Player {
    name: string
    number: string
    position: string
    image?: string
    instagram?: string
    image_background?: string
}

export default function PlayersPage() {
    const { data, isLoading } = useSWR(sheetUrl, async () => {
        const res = await fetch(sheetUrl, {
            method: 'GET',
            mode: 'cors',
            headers: {
                Accept: 'application/json',
            },
        })
        const data = await res.json()
        return data as {
            players: Player[]
            general: any
            sponsors?: string[][]
        }
    })
    const groupedPlayer = useMemo(() => {
        // group by position, we dont know all the position
        // so we need to make it dynamic
        const grouped = data?.players?.reduce((groups, player) => {
            const position = player.position
            if (!groups[position]) {
                groups[position] = []
            }
            groups[position].push(player)
            return groups
        }, {} as Record<string, Player[]>)
        return grouped
    }, [data])
    return (
        <div className='min-h-screen bg-white'>
            {/* Header */}
            <header className='border-b'>
                <div className='container mx-auto px-4'>
                    <div className='flex h-16 items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <img
                                src='/logo.webp'
                                alt='Spectre'
                                width={240}
                                height={80}
                                className='h-16 w-fit object-contain'
                            />

                            <nav>
                                <a
                                    href='#hero'
                                    className='inline-flex h-10 items-center px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                >
                                    Home
                                </a>
                                <a
                                    href='#highlight'
                                    className='inline-flex h-10 items-center px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                >
                                    Higlight
                                </a>
                                <a
                                    href='#players'
                                    className='inline-flex h-10 items-center px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                >
                                    Players
                                </a>
                                <a
                                    href='#join'
                                    className='inline-flex h-10 items-center px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                >
                                    Join
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section
                id='hero'
                className='py-16 text-white h-auto md:aspect-[16/5] aspect-video relative'
            >
                {data?.general?.heading_image && (
                    <picture>
                        {/* create src of heading_image and heading_iamge_mobile */}
                        {data?.general?.heading_image_mobile && (
                            <source
                                media='(max-width: 640px)'
                                srcSet={data?.general?.heading_image_mobile}
                            />
                        )}

                        <img
                            src={data?.general?.heading_image}
                            alt='Spectre'
                            className='h-full w-full object-cover object-center absolute top-0 left-0 z-0'
                        />
                    </picture>
                )}
                <div className='container mx-auto px-4 relative z-10'>
                    <div className='flex flex-col items-center justify-center space-y-6 md:flex-row md:space-x-12 md:space-y-0'>
                        <div className='text-center md:text-left'>
                            {data?.general?.heading && (
                                <h1 className='text-4xl font-bold md:text-6xl'>
                                    {data?.general?.heading}
                                </h1>
                            )}
                            {data?.general?.subheading && (
                                <p className='mt-2 text-xl font-light md:text-2xl'>
                                    {data?.general?.subheading}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {isLoading && <Skeleton className='h-[800px]' />}
            {/* Highlight Video Section */}
            {data?.general?.youtube_url && (
                <section id='highlight' className='bg-gray-100 py-16'>
                    <div className='container mx-auto px-4'>
                        <h2 className='mb-8 text-center text-3xl font-bold text-sky-700'>
                            Team Highlights
                        </h2>
                        <div className='mx-auto max-w-3xl overflow-hidden rounded-lg shadow-lg'>
                            <div className='aspect-[16/9]'>
                                <iframe
                                    src={data?.general?.youtube_url}
                                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen
                                    className='h-full w-full'
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {/* Main Content */}
            <main className='container mx-auto px-4 pt-8'>
                <h1 className='mb-8 text-4xl font-bold text-sky-400'>
                    PLAYERS
                </h1>

                {groupedPlayer &&
                    Object.entries(groupedPlayer).map(([pos, v], i) => (
                        <section id='players' className='mb-12' key={i}>
                            <h2 className='mb-6 text-3xl font-bold text-sky-400'>
                                {pos}
                            </h2>
                            <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4'>
                                {v.map(player => (
                                    <PlayerCard player={player} />
                                ))}
                            </div>
                        </section>
                    ))}

                {/* Join Our Team Section */}

            </main>
            <section
                    id='join'
                    className='bg-sky-700 py-16 text-white mt-12'
                >
                    <div className='container mx-auto px-4'>
                        <div className='grid gap-8 md:grid-cols-2'>
                            <div>
                                <h2 className='mb-4 text-3xl font-bold'>
                                    <a
                                        href='https://wa.me/6282246510950'
                                        target='_blank'
                                    >
                                        Join Our Team
                                    </a>
                                </h2>
                                <p className='mb-6'>
                                    {data?.general?.join_us}
                                </p>
                                <a
                                    href={`https://wa.me/${data?.general?.whatsapp}`}
                                    target='_blank'
                                    className='bg-white text-sky-700 px-8 hover:bg-sky-100 py-2 rounded-sm'
                                >
                                    Join
                                </a>
                            </div>
                            <div>
                                <h3 className='mb-4 text-2xl font-bold'>
                                    Our Sponsors
                                </h3>
                                <div className='flex flex-wrap gap-4'>
                                    {data?.sponsors?.map((sponsor, i) => (
                                        <a
                                            href={sponsor[1]}
                                            target='_blank'
                                            key={i}

                                            className='flex items-center justify-center rounded-md bg-white p-4 aspect-video h-24 w-32'
                                        >
                                            <img
                                                src={sponsor[0]}

                                                alt={`Sponsor`}
                                                width={100}
                                                height={50}
                                                className='h-auto max-w-full'
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

const PlayerCard = ({ player }: { player: Player }) => {
    return (
        <a href='https://www.instagram.com/erling/?hl=en' target='_blank'>
            <Card key={player.number} className='group overflow-hidden'>
                <CardContent className='relative p-0'>
                    <div className='relative aspect-[3/4] flex items-end overflow-hidden'>
                        {player?.image_background && (
                            <img
                                src={player.image_background}
                                alt={player.name}
                                className='absolute top-0 left-0 w-full h-full object-cover'
                            />
                        )}
                        <span className='absolute right-4 top-4 text-8xl font-bold text-sky-300'>
                            {player.number}
                        </span>
                        <img
                            src={player.image}
                            alt={player.name}
                            className='object-cover transition-transform duration-300 group-hover:scale-105 absolute h-full w-full'
                        />
                    </div>
                    <div className='p-4 relative z-10 bg-white'>
                        {/* <span className='text-2xl'>{player.flag}</span> */}
                        <h3 className='mt-2 text-xl font-bold'>
                            {player.name}
                        </h3>
                    </div>
                </CardContent>
            </Card>
        </a>
    )
}
