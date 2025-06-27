/**
 * 应用入口文件
 */
import { MainPage } from './pages/main.js';

// 当DOM加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
  new MainPage();
});

document.addEventListener('DOMContentLoaded', function () {
    // 创建聊天组件实例
    const chatClient = new CozeWebSDK.WebChatClient({
        config: {
            bot_id: '7513958127394439179', // 您的Bot ID
        },
        componentProps: {
            title: '碳足迹科普助手', // 修改为您的智能体名称
            theme: {
                primaryColor: '#00C851', // 主色调：绿色
                secondaryColor: '#03A9F4', // 辅助色：蓝色
            },
            logo: '/assets/Log.jpg', // 自定义Logo（替换为您的图标URL）
            welcomeMessage: '你好！我是碳足迹科普助手，有什么可以帮助你的？', // 欢迎语
        },
        auth: {
            type: 'token',
            token: 'pat_WivDYCifN6aNMOHg6situhNiH6o4mO93VWvNL62lAF5J3dfxc4hE41tCiMjrpIn4', // 替换为您的实际Token
            onRefreshToken: function () {
                return 'pat_WivDYCifN6aNMOHg6situhNiH6o4mO93VWvNL62lAF5J3dfxc4hE41tCiMjrpIn4'; // 刷新Token的回调函数
            }
        }
    });
    // 可选：将聊天组件挂载到指定元素
    // chatClient.mount('#coze-chat-container');
});