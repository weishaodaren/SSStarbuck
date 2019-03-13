//webpack 开发配置
module.exports={
	mode:'production',
	entry:'./public/js/index.js',
	output: {
		path:__dirname+'/dist',
		filename: 'bundle.js'
	},
module:{
	rules:[
//		{
//		test:/\.css$/,
//		use:['style-loader','css-loader']
//	},
{
		test:/\.(jpg)|(png)|(gif)$/,
		use:['url-loader']
		}
	],
	}
};


