/**
 * 个人导航主站页面
 * 提供美观的导航入口，支持 liquid glass 效果
 */

import {
	Code,
	ExternalLink,
	FileText,
	Heart,
	Mail,
	Star,
	User,
} from "lucide-react";
import type { ReactNode } from "react";

interface NavigationItem {
	title: string;
	description: string;
	url: string;
	icon: ReactNode;
	color: string;
}

/**
 * 个人导航主站组件
 * 展示各种链接的导航卡片，具有玻璃拟态效果
 */
export default function App() {
	/** 导航项目配置 */
	const navigationItems: NavigationItem[] = [
		{
			title: "个人简历",
			description: "了解我的专业经历和技能",
			url: "https://resume.seaooo.com",
			icon: <User className="w-6 h-6" />,
			color: "from-blue-500 to-cyan-500",
		},
		{
			title: "技术博客",
			description: "分享技术文章和学习心得",
			url: "https://example.com/blog",
			icon: <FileText className="w-6 h-6" />,
			color: "from-purple-500 to-pink-500",
		},
		{
			title: "项目作品",
			description: "展示我的开源项目和作品",
			url: "https://github.com/seaooo-code",
			icon: <Code className="w-6 h-6" />,
			color: "from-green-500 to-emerald-500",
		},
		{
			title: "GitHub",
			description: "查看我的代码仓库",
			url: "https://github.com/seaooo-code",
			icon: <div className="i-tabler-brand-github w-6 h-6" />,
			color: "from-gray-500 to-slate-500",
		},
		{
			title: "联系我",
			description: "通过邮件与我取得联系",
			url: "mailto:chenhui.yang@seaooo.com",
			icon: <Mail className="w-6 h-6" />,
			color: "from-orange-500 to-red-500",
		},
		{
			title: "个人作品集",
			description: "设计作品和创意项目",
			url: "https://example.com/portfolio",
			icon: <Star className="w-6 h-6" />,
			color: "from-yellow-500 to-amber-500",
		},
	];

	/**
	 * 处理导航项目点击事件
	 * @param url - 目标链接
	 */
	const handleNavigationClick = (url: string) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
			{/* 动态背景效果 */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
			</div>

			{/* 主要内容区域 */}
			<div className="relative z-10 container mx-auto px-4 py-12">
				{/* 页面标题 */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
						<Heart className="w-8 h-8 text-pink-400" />
					</div>
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
						个人导航中心
					</h1>
					<p className="text-xl text-gray-300 max-w-2xl mx-auto">
						欢迎来到我的个人导航站，这里汇集了我的所有重要链接
					</p>
				</div>

				{/* 导航卡片网格 */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
					{navigationItems.map((item, index) => (
						<div
							key={index}
							onClick={() => handleNavigationClick(item.url)}
							className="group relative cursor-pointer"
						>
							{/* 玻璃拟态卡片 */}
							<div className="relative p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
								{/* 渐变背景光效 */}
								<div
									className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
								></div>

								{/* 卡片内容 */}
								<div className="relative z-10">
									{/* 图标容器 */}
									<div
										className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
									>
										<div className="text-white">{item.icon}</div>
									</div>

									{/* 标题和描述 */}
									<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors duration-300">
										{item.title}
									</h3>
									<p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
										{item.description}
									</p>

									{/* 外部链接图标 */}
									<div className="flex items-center text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
										<ExternalLink className="w-4 h-4 mr-1" />
										<span className="text-sm">打开链接</span>
									</div>
								</div>

								{/* 悬停光晕效果 */}
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>
						</div>
					))}
				</div>

				{/* 底部信息 */}
				<div className="text-center mt-16">
					<div className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
						<span className="text-gray-300 text-sm">
							Made with <Heart className="w-4 h-4 text-pink-400 inline mx-1" />{" "}
							by Your Name
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
