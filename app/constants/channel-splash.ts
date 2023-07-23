type VideoType = {
  id: number;
  title: string;
  year: number;
  vote_average: number;
  creators: Array<string>;
  description: string;
  categories: Array<string>;
  image: string;
  backdrop_path: string;
  mux_asset_id: string;
  mux_playback_id: string;
  mux_preview_gif: string;
};


export const getVideoById = (id: number): VideoType | undefined => {
  const allVideos = [...channelPop, ...channelAIFilms, ...channelNFT, ...channelGAN, ...channelMusicVideos, ...channelAIAmbient, ...channelAIIA];
  return allVideos.find((video) => video.id === id);
};

export const creators = [
  {
    id: 1,
    name: 'Moises Sanabria',
    image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1690140502/ai24/creators/creator-profile-images/LoRA-MoisesDSanabria_xpal7p.jpg',
    link: 'https://twitter.com/moisesnotmoses',
    creations: ['Latent Lovers', 'Eden\'s Gateway']
  },
  {
    id: 2,
    name: 'Fabiola Larios',
    image: 'https://res.cloudinary.com/dck5rzi4h/image/upload/v1690141152/ai24/creators/creator-profile-images/fabiolalariosm_fmuup8.jpg',
    link: 'https://twitter.com/fabiolalariosm',
    creations: ['Latent Lovers', 'Eden\'s Gateway']
  },
]

export const channelPop = [
  {
    id: 1,
    title: 'Latent Lovers',
    year: 2012,
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    creators: ['Moises Sanabria', 'Fabiola Larios'],
    image: 'https://image.mux.com/vLwkLpQtO025S5ZcCgbgkHste901MxdU4kyd200qN00HdbE/thumbnail.png?width=303&time=29',
    backdrop_path: '',
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    mux_asset_id: '2mzApfc4mgwDpU93V2fAC7CMbKllRLLcOPn6rbK009Ao',
    mux_playback_id: 'vLwkLpQtO025S5ZcCgbgkHste901MxdU4kyd200qN00HdbE',
    mux_preview_gif: 'https://image.mux.com/vLwkLpQtO025S5ZcCgbgkHste901MxdU4kyd200qN00HdbE/animated.gif?width=303'
  },
  {
    id: 2,
    title: "Eden's Gateway",
    year: 2012,
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    creators: ['Moises Sanabria','Fabiola Larios'],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/xJrLBfxkJVnDvwwj2zeFdLnq6Ssvn6BYsMwcswC7Hm8/thumbnail.png?width=303&time=78',
    backdrop_path: '',
    mux_asset_id: 'LwRmznU02TiLHXu4Nf6hN3sHlIHQD6XAeYqr4502IKLiM',
    mux_playback_id: 'xJrLBfxkJVnDvwwj2zeFdLnq6Ssvn6BYsMwcswC7Hm8',
    mux_preview_gif: 'https://image.mux.com/xJrLBfxkJVnDvwwj2zeFdLnq6Ssvn6BYsMwcswC7Hm8/animated.gif?width=303&start=78'
  },
  {
    id: 3,
    title: "AI Hero Manifesto",
    year: 2012,
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    creators: ['Moises Sanabria','Fabiola Larios','Damjanski'],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/FuoZ1U007Xzz6Bd7JOcWTgHPirWb3gBIkg01NCUNpN4EQ/thumbnail.png?width=214&height=121&time=29',
    backdrop_path: '',
    mux_asset_id: 'NMGWcah2iFHyYkvGqj00M3TdCcNCakiMi5h9eqkqw006o',
    mux_playback_id: 'FuoZ1U007Xzz6Bd7JOcWTgHPirWb3gBIkg01NCUNpN4EQ',
    mux_preview_gif: 'https://image.mux.com/FuoZ1U007Xzz6Bd7JOcWTgHPirWb3gBIkg01NCUNpN4EQ/animated.gif?width=320&start=29'
  },
  {
    id: 4,
    title: "Roar Roar",
    year: 2012,
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    creators: ['Fabian Mosele'],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/02TKzM28zWavXaU00f6MjE6OcnMwl49XRQFasyeJ7WfqY/thumbnail.png?width=303&time=40',
    backdrop_path: '',
    mux_asset_id: 'XuDkQScxSWhSUD56ZWGOpDS6THDzXmLnavVml00eAr68',
    mux_playback_id: '02TKzM28zWavXaU00f6MjE6OcnMwl49XRQFasyeJ7WfqY',
    mux_preview_gif: 'https://image.mux.com/02TKzM28zWavXaU00f6MjE6OcnMwl49XRQFasyeJ7WfqY/animated.gif?width=320&start=19'
  },
]

export const channelAIFilms = [
  {
    id: 1,
    title: 'Free Yourself, Be That Who One No One Else Can..',
    year: 2012,
    creators: ["Johannez"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/uc00zF9FAHmddQCFJv2dpisnLHlzCgEGq8qs5jgxP02f8/thumbnail.png?width=214&time=39',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'r02xbx01tq83KBukFVf1pJ01RvDwhrPzu3wXyVMJ1XmdVo',
    mux_playback_id: 'uc00zF9FAHmddQCFJv2dpisnLHlzCgEGq8qs5jgxP02f8',
    mux_preview_gif: 'https://image.mux.com/uc00zF9FAHmddQCFJv2dpisnLHlzCgEGq8qs5jgxP02f8/animated.gif?width=320&start=39'
  },
  {
    id: 2,
    title: '%%%',
    year: 2012,
    creators:["Rafael Paula"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/O82Jy3tG028PSwDfRRi00f1bZpuREMRiX02bv5TBMR14no/thumbnail.png?width=214&time=111',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'O022VlrOc4N01k4Wbz3lA51bpGzuS8t1ApTF02EgXuhVm4',
    mux_playback_id: 'O82Jy3tG028PSwDfRRi00f1bZpuREMRiX02bv5TBMR14no',
    mux_preview_gif: 'https://image.mux.com/O82Jy3tG028PSwDfRRi00f1bZpuREMRiX02bv5TBMR14no/animated.gif?width=320&start=111'
  },
  {
    id: 3,
    title: 'acha-dd5-zoom-1-square',
    year: 2012,
    creators: ["twt_cha_"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/Rs4JQB4UiaNHAUBEIrIBe00btht00f6Rcu35hI4xcpao00/thumbnail.png?width=214&time=7',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'imYVaNqw5OmdpH3WPQLeUFUyrWGIHUHYEN01hwM7PnX8',
    mux_playback_id: 'Rs4JQB4UiaNHAUBEIrIBe00btht00f6Rcu35hI4xcpao00',
    mux_preview_gif: 'https://image.mux.com/Rs4JQB4UiaNHAUBEIrIBe00btht00f6Rcu35hI4xcpao00/animated.gif?width=320&start=7'
  },
  {
    id: 4,
    title: 'Developers',
    year: 2012,
    creators: ["Emmanuel Martinez"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/BhdMxvSGUc1orUSItnk56PNsSgVzLbc016ejsZCs2u7c/thumbnail.png?width=214&time=27',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '00CT5rcXWaZpuDCjjB00YVs900ve8KmbPVe8DOxZG8JiVw',
    mux_playback_id: 'BhdMxvSGUc1orUSItnk56PNsSgVzLbc016ejsZCs2u7c',
    mux_preview_gif: 'https://image.mux.com/BhdMxvSGUc1orUSItnk56PNsSgVzLbc016ejsZCs2u7c/animated.gif?width=320&start=27'
  },
]

export const channelNFT = [
  {
    id: 1,
    title: 'Nostalgia',
    year: 2012,
    creators: ["Sarko Ehara"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/Do71X801Wf8Pi24h1DBVvLg7RA7N00Wo1BQ4gFoQpCtO00/thumbnail.png?width=214&time=9',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'hIp00K01aUrWjmXm2j6x0001baRYRkviQ64s02OW36UGnGvE',
    mux_playback_id: 'Do71X801Wf8Pi24h1DBVvLg7RA7N00Wo1BQ4gFoQpCtO00',
    mux_preview_gif: 'https://image.mux.com/Do71X801Wf8Pi24h1DBVvLg7RA7N00Wo1BQ4gFoQpCtO00/animated.gif?width=320'
  },
  {
    id: 2,
    title: 'AI Landscape',
    year: 2012,
    creators: ["Heliodoro Santos"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/MkunjJhJ01dpbbnLx5pGStN9hjKJLJ9F00Xepej02Q1GYQ/thumbnail.png?width=214&time=16',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '8dqjP00LkLzafsHXPLA7HAPqTWXk1DQgutwoMXQXNx9w',
    mux_playback_id: 'MkunjJhJ01dpbbnLx5pGStN9hjKJLJ9F00Xepej02Q1GYQ',
    mux_preview_gif: 'https://image.mux.com/MkunjJhJ01dpbbnLx5pGStN9hjKJLJ9F00Xepej02Q1GYQ/animated.gif?width=320&start=16'
  },
  {
    id: 3,
    title: 'Underwater calls',
    year: 2012,
    creators: ["Makeitrad "],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/lsi02aDXWKm25CgsWTnCk4tbF026altr2q016M4qOf5CSc/thumbnail.png?width=214&time=17',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'lIfmLuUkgPTAfA700qxEsDCO5rWkLngYOk02yRdD6thMI',
    mux_playback_id: 'lsi02aDXWKm25CgsWTnCk4tbF026altr2q016M4qOf5CSc',
    mux_preview_gif: 'https://image.mux.com/lsi02aDXWKm25CgsWTnCk4tbF026altr2q016M4qOf5CSc/animated.gif?width=320&start=17'
  },
  {
    id: 4,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
]

export const channelGAN = [
  {
    id: 1,
    title: 'A wave of threads, a wave of cultures',
    year: 2012,
    creators: ["Diego Porres"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/WQUsG300mSv2rgrsUDGXbWir00OialMmJTWLZwoaKc00ig/thumbnail.png?width=214&time=9',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'RMrmFGozIhm0202WS01R3b6Pk4kzkUNp8lpvMp3qKogpSc',
    mux_playback_id: 'WQUsG300mSv2rgrsUDGXbWir00OialMmJTWLZwoaKc00ig',
    mux_preview_gif: 'https://image.mux.com/WQUsG300mSv2rgrsUDGXbWir00OialMmJTWLZwoaKc00ig/animated.gif?width=320&start=9'
  },
  {
    id: 2,
    title: 'Artifical Architecture',
    year: 2012,
    creators: ["MakeitRad"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/b25dy6fx8ZH424bV02d01S8QLx1q5twpfiE6d00RBN6QZ8/thumbnail.png?width=214&time=7',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '01FQm1zf82q9UfGKZIlTnosMzyMwSRb801Ap01s8sstxns',
    mux_playback_id: 'b25dy6fx8ZH424bV02d01S8QLx1q5twpfiE6d00RBN6QZ8',
    mux_preview_gif: 'https://image.mux.com/b25dy6fx8ZH424bV02d01S8QLx1q5twpfiE6d00RBN6QZ8/animated.gif?width=320&start=7'
  },
  {
    id: 3,
    title: 'AInternet',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/EycxUOoMYkEFGzYTv010039m4SdQYQ01bCIFGU4Jk8hP7Q/thumbnail.png?width=214&time=8',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'C7GLe00x021y6cHfztD004D4m0188ujpztpe4ln97jzYRqs',
    mux_playback_id: 'EycxUOoMYkEFGzYTv010039m4SdQYQ01bCIFGU4Jk8hP7Q',
    mux_preview_gif: 'https://image.mux.com/EycxUOoMYkEFGzYTv010039m4SdQYQ01bCIFGU4Jk8hP7Q/animated.gif?width=320&start=8'
  },
  {
    id: 4,
    title: 'Imagineries Speculative Architecture',
    year: 2012,
    creators: ["CNDSD + IVAN "],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/lreMMaKfFXtRqK9o2yhetXFVWZ9hYhJjncB1MggckK4/thumbnail.png?width=214&time=8',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'M2OU36N4JLUIP6wikCgBcg9o8bS8ddqb1CC6tyte00sw',
    mux_playback_id: 'lreMMaKfFXtRqK9o2yhetXFVWZ9hYhJjncB1MggckK4',
    mux_preview_gif: 'https://image.mux.com/lreMMaKfFXtRqK9o2yhetXFVWZ9hYhJjncB1MggckK4/animated.gif?width=320&start=8'
  },
]

export const channelMusicVideos = [
  {
    id: 1,
    title: 'Dirty Feet',
    year: 2012,
    creators: ["Barty Darty"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/Sf61PslcQoGlpaLCZxt01gnsHa7G34oJsv98uQo201OeE/thumbnail.png?width=303&time=46',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'tHs39gQ02RuLvTekaPSI00N1MO5gI014fotS19tkvQyBVA',
    mux_playback_id: 'Sf61PslcQoGlpaLCZxt01gnsHa7G34oJsv98uQo201OeE',
    mux_preview_gif: 'https://image.mux.com/Sf61PslcQoGlpaLCZxt01gnsHa7G34oJsv98uQo201OeE/animated.gif?width=320&start=46'
  },
  {
    id: 2,
    title: 'Me n MJ',
    year: 2012,
    creators: ["TeeVee"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/jxS02YkqYvYjNWD85Mc4akNA2YNF015a01NiO52K5XxQ4s/thumbnail.png?width=303&time=60',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'lDMOeG7IFEcLFSXPaM3JkKJEx8ozZCLiB7MYQ7Djzh00',
    mux_playback_id: 'jxS02YkqYvYjNWD85Mc4akNA2YNF015a01NiO52K5XxQ4s',
    mux_preview_gif: 'https://image.mux.com/jxS02YkqYvYjNWD85Mc4akNA2YNF015a01NiO52K5XxQ4s/animated.gif?width=320&start=60'
  },
  {
    id: 3,
    title: 'Holla at Me',
    year: 2012,
    creators: ['Fabiola Larios', 'Gremlin Bb'],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/rpd9B3aHdaz26hYWsNDqHC3xsWgAcyIjXzOcbNeM4WI/thumbnail.png?width=303&time=9',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'J6wV7fw9Co3ltFsJPNeINhbAm502omH31G01WiOhL02mF8',
    mux_playback_id: 'rpd9B3aHdaz26hYWsNDqHC3xsWgAcyIjXzOcbNeM4WI',
    mux_preview_gif: 'https://image.mux.com/rpd9B3aHdaz26hYWsNDqHC3xsWgAcyIjXzOcbNeM4WI/animated.gif?width=320&start=9'
  },
  {
    id: 4,
    title: 'Autoconstruction',
    year: 2012,
    creators: ['CNDSD', 'Ivan'],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/WD4KYP4XNMey6WbTg2feFZbRR600SNgMQfMf00J01azDek/thumbnail.png?width=303&time=16',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'Z02zvc01BiFJxP00Jt7JdbKPwjubQ3WcPWpLlMwP6008TWA',
    mux_playback_id: 'WD4KYP4XNMey6WbTg2feFZbRR600SNgMQfMf00J01azDek',
    mux_preview_gif: 'https://image.mux.com/WD4KYP4XNMey6WbTg2feFZbRR600SNgMQfMf00J01azDek/animated.gif?width=320&start=160'
  },
  {
    id: 5,
    title: 'Unknown',
    year: 2012,
    creators: ["DrewMedina"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/eIZdUb2QnxjV7yhqaJwiwzR8NA18NLBLcnkVPyxFfnI/thumbnail.png?width=303&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'zW02cwjetPjMWrZf9sroBvgFAm01SN4ofrFVgm02edn2a4',
    mux_playback_id: '6ESC8PaJxQPnnmqwAJaBc2Lici3TudPw7loeFErmWkw',
    mux_preview_gif: 'https://image.mux.com/6ESC8PaJxQPnnmqwAJaBc2Lici3TudPw7loeFErmWkw/animated.gif?width=320'
  },
  {
    id: 6,
    title: 'MiniAlture#1',
    year: 2012,
    creators: ["Johannezz"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/eIZdUb2QnxjV7yhqaJwiwzR8NA18NLBLcnkVPyxFfnI/thumbnail.png?width=303&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'zW02cwjetPjMWrZf9sroBvgFAm01SN4ofrFVgm02edn2a4',
    mux_playback_id: '6ESC8PaJxQPnnmqwAJaBc2Lici3TudPw7loeFErmWkw',
    mux_preview_gif: 'https://image.mux.com/6ESC8PaJxQPnnmqwAJaBc2Lici3TudPw7loeFErmWkw/animated.gif?width=320'
  },
  {
    id: 7,
    title: 'MACHINE2',
    year: 2012,
    creators: ["Stolas"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/eIZdUb2QnxjV7yhqaJwiwzR8NA18NLBLcnkVPyxFfnI/thumbnail.png?width=303&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'zW02cwjetPjMWrZf9sroBvgFAm01SN4ofrFVgm02edn2a4',
    mux_playback_id: '6ESC8PaJxQPnnmqwAJaBc2Lici3TudPw7loeFErmWkw',
    mux_preview_gif: 'https://image.mux.com/6ESC8PaJxQPnnmqwAJaBc2Lici3TudPw7loeFErmWkw/animated.gif?width=320'
  },
]

export const channelAIAmbient = [
  {
    id: 1,
    title: 'Heliophlux',
    year: 2012,
    creators: ["Pharma Psychotic"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/TRiTTGFt6KvBWiIQHmzmuls02y1kwKC00Cbx01d8E9ADzw/thumbnail.png?width=214&time=8',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'TGdYfUZYvZpw0000P022uY2k8Fx32PNSz02yikRI6N193NU',
    mux_playback_id: 'TRiTTGFt6KvBWiIQHmzmuls02y1kwKC00Cbx01d8E9ADzw',
    mux_preview_gif: 'https://image.mux.com/TRiTTGFt6KvBWiIQHmzmuls02y1kwKC00Cbx01d8E9ADzw/animated.gif?width=320&start=8'
  },
  {
    id: 2,
    title: 'City Style Transfer - Williamsburg',
    year: 2012,
    creators: ["Nate Mohl"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/YIUATvZ02wn01EIrsMqRo1Oj3nTuCxSDcbireGRKT900F00/thumbnail.png?width=214&time=41',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '2lC3P1PF4SABvnfvMqHvXrBKBDsvj02sNSN5n63gE01UU',
    mux_playback_id: 'YIUATvZ02wn01EIrsMqRo1Oj3nTuCxSDcbireGRKT900F00',
    mux_preview_gif: 'https://image.mux.com/YIUATvZ02wn01EIrsMqRo1Oj3nTuCxSDcbireGRKT900F00/animated.gif?width=320&start=41'
  },
  {
    id: 3,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 4,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
]

export const channelAIIA = [
  {
    id: 1,
    title: 'Illustrata',
    year: 2012,
    creators: ["Illustrata "],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/YxgL2T4OwkITh8z01WTjhB01uVbR4bUBkzxyUYiCzzeZY/thumbnail.png?width=214&time=68',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'YxgL2T4OwkITh8z01WTjhB01uVbR4bUBkzxyUYiCzzeZY',
    mux_playback_id: 'YxgL2T4OwkITh8z01WTjhB01uVbR4bUBkzxyUYiCzzeZY',
    mux_preview_gif: 'https://image.mux.com/YxgL2T4OwkITh8z01WTjhB01uVbR4bUBkzxyUYiCzzeZY/animated.gif?width=320&start=68'
  },
  {
    id: 2,
    title: 'DVK',
    year: 2012,
    creators: ["DVKthecreators"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/i5QdEOwGIFeM026IuJASijv7l7l1pblXo841m48ul800U/thumbnail.png?width=214&time=15',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'lUQ01j00USPmh01zRtQ00srMNDTA00kvJn7UY77wFG1JV1QI',
    mux_playback_id: 'i5QdEOwGIFeM026IuJASijv7l7l1pblXo841m48ul800U',
    mux_preview_gif: 'https://image.mux.com/i5QdEOwGIFeM026IuJASijv7l7l1pblXo841m48ul800U/animated.gif?width=320&start=15'
  },
  {
    id: 3,
    title: 'DeltaSauce',
    year: 2012,
    creators: ["DeltaSauce"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/00gLfImBPDkSVbIfAICiejwBvPJ01oJEL7S9eJ6zqCmrY/thumbnail.png?width=214&time=15',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'aFFx3afUXh8qtWc8sRtS71DyKNTUq8jDRiFsqDx8hKE',
    mux_playback_id: '00gLfImBPDkSVbIfAICiejwBvPJ01oJEL7S9eJ6zqCmrY',
    mux_preview_gif: 'https://image.mux.com/00gLfImBPDkSVbIfAICiejwBvPJ01oJEL7S9eJ6zqCmrY/animated.gif?width=320&start=15'
  },
  {
    id: 4,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Sun"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/vWvE5Pwi9fPou7vzYpreiFA00WA9Zxvs202frXkzfy7as/thumbnail.png?width=214&time=13',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'QT6svHcEjR9S2R3502teR02WG7ohcHA1UsWcifiLUb6Cw',
    mux_playback_id: 'vWvE5Pwi9fPou7vzYpreiFA00WA9Zxvs202frXkzfy7as',
    mux_preview_gif: 'https://image.mux.com/vWvE5Pwi9fPou7vzYpreiFA00WA9Zxvs202frXkzfy7as/animated.gif?width=320&start=13'
  },
]

export const channelAI3D = [
  {
    id: 1,
    title: 'AI 3D Characters',
    year: 2012,
    creators: ["NJetchev"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&time=10',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'kZHE5JlqPPGqpZOH1poD4To8GOpX02Y91tc5FuHV74xg',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/animated.gif?width=320&start=10'
  },
  {
    id: 2,
    title: 'AI 3D Characters',
    year: 2012,
    creators: ["NJetchev"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/B01dhvBgZy2UCyRFc7C02mC1DRmefIjxOfr5Ymmyktp5U/thumbnail.png?width=214&time=10',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'g11RCkgimCp01RqPtdyUbeptfPxhndzGEV00Md019kJBVU',
    mux_playback_id: 'B01dhvBgZy2UCyRFc7C02mC1DRmefIjxOfr5Ymmyktp5U',
    mux_preview_gif: 'https://image.mux.com/B01dhvBgZy2UCyRFc7C02mC1DRmefIjxOfr5Ymmyktp5U/animated.gif?width=320&start=7'
  },
  {
    id: 3,
    title: 'AI 3D Characters',
    year: 2012,
    creators: ["NJetchev"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/MpdNzaQRPD2tleTd31TkcrVveeI8RR1YQrU6YXIC4Kw/thumbnail.png?width=214&time=10',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'ZdtBD39zg1kSaxB2kijfrSKMdNzTlZljTUyj3c3O6bY',
    mux_playback_id: 'MpdNzaQRPD2tleTd31TkcrVveeI8RR1YQrU6YXIC4Kw',
    mux_preview_gif: 'https://image.mux.com/MpdNzaQRPD2tleTd31TkcrVveeI8RR1YQrU6YXIC4Kw/animated.gif?width=320'
  },
  {
    id: 4,
    title: 'AI 3D Characters',
    year: 2012,
    creators: ["NJetchev"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/1V802dbfwIc9LGvIE5gg31sr00MVoKp2278i1cJLsuEBw/thumbnail.png?width=214&time=8',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: 'RFv6RPXg824llE3ko5sXKLdDMvBG1gyLQuc02H00Ug5Bs',
    mux_playback_id: '1V802dbfwIc9LGvIE5gg31sr00MVoKp2278i1cJLsuEBw',
    mux_preview_gif: 'https://image.mux.com/1V802dbfwIc9LGvIE5gg31sr00MVoKp2278i1cJLsuEBw/animated.gif?width=320&start=8'
  },
]

export const channelEducation = [
  {
    id: 1,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 2,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 3,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 4,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
]

export const channelText2Video = [
  {
    id: 1,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 2,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 3,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 4,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
]

export const channelKaiber = [
  {
    id: 1,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 2,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 3,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 4,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
]

export const channelGen = [
  {
    id: 1,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 2,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 3,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 4,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
]

export const channelTV = [
  {
    id: 1,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 2,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 3,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
  {
    id: 4,
    title: 'NJetchev - AI 3D Characters',
    year: 2012,
    creators: ["Fabiola Larios M"],
    categories: ['Sci-fi', 'Art Film', 'Disco-Diffusion'],
    image: 'https://image.mux.com/ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4/thumbnail.png?width=214&height=121&time=30',
    backdrop_path: '',
    vote_average: 8.1,
    description: "A neural search for connection through the Metaverse, dedicated to my wife @fabiolalariosm",
    mux_asset_id: '',
    mux_playback_id: 'ZGRHJG02cYs5uNi3C4YUJcnVkHuWUZAB00HPjQdEvYcq4',
    mux_preview_gif: '&start=10'
  },
]