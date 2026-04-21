import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 音乐播放器功能开关
	enable: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "meting",

	// Meting API 配置
	meting: {
		// Meting API 地址 - 已失效，建议更换
		api: "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "14148542684",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
		// MetingJS 脚本路径
		jsPath: "https://unpkg.com/meting@2/dist/Meting.min.js",
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	local: {
		playlist: [],  // 清空本地音乐列表
	},

	// APlayer 配置选项
	player: {
		autoplay: false,
		theme: "var(--btn-regular-bg)",
		loop: "all",
		order: "list",
		preload: "auto",
		volume: 0.7,
		mutex: true,
		lrcType: 1,
		lrcHidden: true,
		listFolded: false,
		listMaxHeight: "340px",
		storageName: "aplayer-setting",
	},

	// 响应式配置
	responsive: {
		mobile: {
			hide: false,
			breakpoint: 768,
		},
	},
};
