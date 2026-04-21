import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 音乐播放器功能开关
	enable: true,

	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "meting",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: true,

	// Meting API 配置
	meting: {
		// Meting API 地址 - 使用可用的 injahow API
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
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
		// MetingJS 脚本路径
		jsPath: "https://unpkg.com/meting@2/dist/Meting.min.js",
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	local: {
		playlist: [],  // 清空本地音乐列表
	},

	// APlayer 配置选项（嵌套结构，组件需要这样读取）
	player: {
		// 是否固定播放器
		fixed: true,
		// 是否迷你模式
		mini: true,
		// 是否自动播放（浏览器可能会阻止，需用户交互一次网页后才自动播放）
		autoplay: false,
		// 主题色
		theme: "var(--btn-regular-bg)",
		// 循环模式：'all'=列表循环, 'one'=单曲循环, 'none'=不循环
		loop: "all",
		// 播放顺序：'list'=列表顺序, 'random'=随机播放
		order: "list",
		// 预加载：'none'=不预加载, 'metadata'=预加载元数据, 'auto'=自动
		preload: "auto",
		// 默认音量 (0-1)
		volume: 0.7,
		// 是否互斥播放（同时只能播放一个播放器）
		mutex: true,
		// local歌词类型：0=不显示, 1=显示（需要提供 lrc 字段）, 2=显示（从 HTML 内容读取）
		lrcType: 1,
		// 歌词是否默认隐藏
		lrcHidden: true,
		// 播放列表是否默认折叠
		listFolded: false,
		// 播放列表最大高度
		listMaxHeight: "340px",
		// localStorage 存储键名
		storageName: "aplayer-setting",
	},

	// 响应式配置
	responsive: {
		mobile: {
			// 在移动端是否隐藏
			hide: false,
			// 移动端断点（小于此宽度时应用移动端配置）
			breakpoint: 768,
		},
	},
};
