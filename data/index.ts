export type Tab = "Playlists" | "Artists" | "Albums" | "Podcasts & Shows"

type TabData = {
	name: Tab
}

type SubTabData = {
	[key in Tab]: {
		name: string
	}[]
}

export const tabs: TabData[] = [
	{
		name: "Playlists",
	},
	{
		name: "Artists",
	},
	{
		name: "Albums",
	},
]

export const subTabs: SubTabData = {
	Playlists: [
		{
			name: "By you",
		},
		{
			name: "Downloaded",
		},
		{
			name: "Suggested",
		},
		{
			name: "Liked songs",
		},
		{
			name: "Recently played",
		},
	],
	Albums: [],
	Artists: [],
	"Podcasts & Shows": [],
}
