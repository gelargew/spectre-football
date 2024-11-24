import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

// Sample player data
const goalkeepers = [
    {
        name: 'SCOTT CARSON',
        number: '33',
        image: '/erling-haaland.webp',
        nationality: 'England',
        flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    },
    {
        name: 'EDERSON',
        number: '31',
        image: '/erling-haaland.webp',
        nationality: 'Brazil',
        flag: '🇧🇷',
    },
    {
        name: 'STEFAN ORTEGA MORENO',
        number: '18',
        image: '/erling-haaland.webp',
        nationality: 'Germany',
        flag: '🇩🇪',
    },
]

const defenders = [
    {
        name: 'MANUEL AKANJI',
        number: '25',
        image: '/erling-haaland.webp',
        nationality: 'Switzerland',
        flag: '🇨🇭',
    },
    {
        name: 'NATHAN AKE',
        number: '6',
        image: '/erling-haaland.webp',
        nationality: 'Netherlands',
        flag: '🇳🇱',
    },
    {
        name: 'RUBEN DIAS',
        number: '3',
        image: '/erling-haaland.webp',
        nationality: 'Portugal',
        flag: '🇵🇹',
    },
    {
        name: 'JOSKO GVARDIOL',
        number: '24',
        image: '/erling-haaland.webp',
        nationality: 'Croatia',
        flag: '🇭🇷',
    },
]

export default function PlayersPage() {
    return (
        <div className='min-h-screen bg-white'>
            {/* Header */}
            <header className='border-b'>
                <div className='container mx-auto px-4'>
                    <div className='flex h-16 items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <img
                                src='/logo.webp'
                                alt='Manchester City'
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
            <section id='hero' className='bg-sky-700 py-16 text-white'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col items-center justify-center space-y-6 md:flex-row md:space-x-12 md:space-y-0'>
                        <img
                            src='/logo.webp'
                            alt='Manchester City Logo'
                            width={200}
                            height={200}
                            className='h-28 w-fit md:h-48 md:w-80 object-contain'
                        />
                        <div className='text-center md:text-left'>
                            <h1 className='text-4xl font-bold md:text-6xl'>
                                Spectre
                            </h1>
                            <p className='mt-2 text-xl font-light md:text-2xl'>
                                Official Team Page
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Highlight Video Section */}
            <section id='highlight' className='bg-gray-100 py-16'>
                <div className='container mx-auto px-4'>
                    <h2 className='mb-8 text-center text-3xl font-bold text-sky-700'>
                        Team Highlights
                    </h2>
                    <div className='mx-auto max-w-3xl overflow-hidden rounded-lg shadow-lg'>
                        <div className='aspect-[16/9]'>
                            <iframe
                                src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                                className='h-full w-full'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
            {/* Main Content */}
            <main className='container mx-auto px-4 py-8'>
                <h1 className='mb-8 text-4xl font-bold text-sky-400'>
                    PLAYERS
                </h1>

                <section id='players' className='mb-12'>
                    <h2 className='mb-6 text-3xl font-bold text-sky-400'>
                        GOALKEEPERS
                    </h2>
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        {goalkeepers.map(player => (
                            <PlayerCard player={player} />
                        ))}
                    </div>
                </section>

                {/* Defenders Section */}
                <section>
                    <h2 className='mb-6 text-3xl font-bold text-sky-400'>
                        DEFENDERS
                    </h2>
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                        {defenders.map(player => (
                            <PlayerCard player={player} />
                        ))}
                    </div>
                </section>
                {/* Join Our Team Section */}
                <section id='join' className='bg-sky-700 py-16 text-white my-12'>
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
                                    Be a part of the Manchester City family.
                                    We&apos;re always looking for passionate
                                    individuals to join our team, both on and
                                    off the field.
                                </p>
                                <Button className='bg-white text-sky-700 px-8 hover:bg-sky-100'>
                                    Join
                                </Button>
                            </div>
                            <div>
                                <h3 className='mb-4 text-2xl font-bold'>
                                    Our Sponsors
                                </h3>
                                <div className='grid grid-cols-3 gap-4'>
                                    {[1, 2, 3, 4, 5, 6].map(sponsor => (
                                        <div
                                            key={sponsor}
                                            className='flex items-center justify-center rounded-md bg-white p-4'
                                        >
                                            <img
                                                src='/placeholder.svg'
                                                alt={`Sponsor ${sponsor}`}
                                                width={100}
                                                height={50}
                                                className='h-auto max-w-full'
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

const PlayerCard = ({
    player,
}: {
    player: {
        name: string
        number: string
        image: string
        nationality: string
        flag: string
    }
}) => {
    return (
        <a href='https://www.instagram.com/erling/?hl=en' target='_blank'>
            <Card key={player.number} className='group overflow-hidden'>
                <CardContent className='relative p-0'>
                    <div className='relative aspect-[3/4] flex items-end overflow-hidden bg-sky-400'>
                        <span className='absolute right-4 top-4 text-8xl font-bold text-sky-300'>
                            {player.number}
                        </span>
                        <img
                            src={player.image}
                            alt={player.name}
                            className='object-cover transition-transform duration-300 group-hover:scale-105'
                        />
                    </div>
                    <div className='p-4'>
                        <span className='text-2xl'>{player.flag}</span>
                        <h3 className='mt-2 text-xl font-bold'>
                            {player.name}
                        </h3>
                    </div>
                </CardContent>
            </Card>
        </a>
    )
}
