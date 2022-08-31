import { createApp } from "vue/dist/vue.esm-browser";
import SmartyUI from './entry';

createApp({
  template: `
    <div style="margin-bottom:20px;">
      <SButton>普通按钮</SButton>
      <SButton color="green">绿色按钮</SButton>
      <SButton color="gray">灰色按钮</SButton>
      <SButton color="yellow">黄色按钮</SButton>
      <SButton color="red">红色按钮</SButton>
    </div>
    <div style="margin-bottom:20px;">
      <SButton plain>普通按钮</SButton>
      <SButton color="green" plain>绿色按钮</SButton>
      <SButton color="gray" plain>灰色按钮</SButton>
      <SButton color="yellow" plain>黄色按钮</SButton>
      <SButton color="red" plain>红色按钮</SButton>
    </div>
    <div style="margin-bottom:20px;">
      <SButton size="small" plain>小按钮</SButton>
      <SButton size="medium" plain>中按钮</SButton>
      <SButton size="large" plain>大按钮</SButton>
    </div>
    <div style="margin-bottom:20px;">
      <SButton plain round>普通按钮</SButton>
      <SButton color="green" plain round>绿色按钮</SButton>
      <SButton color="gray" plain round>灰色按钮</SButton>
      <SButton color="yellow" plain round>黄色按钮</SButton>
      <SButton color="red" plain round>红色按钮</SButton>
    </div>
    <div style="margin-bottom:20px;">
      <SButton color="blue" round plain icon="search"></SButton>
      <SButton color="green" round plain icon="edit"></SButton>
      <SButton color="gray" round plain icon="check"></SButton>
      <SButton color="yellow" round plain icon="message"></SButton>
      <SButton color="red" round plain icon="delete"></SButton>
    </div>
  `
}).use(SmartyUI).mount('#app')