<script setup lang="ts">
import { IconPark } from '@icon-park/vue-next/es/all';
import {ref} from 'vue'

const status:any = ref("warning")

</script>

<template>
    <div id="description-view">

        <a-split class="left-split" min="80px">
            <template #first>
                <div class="left">
                    <div class="header">
                        <a-space class="buttons">
                            <a-breadcrumb separator="|">
                                <a-breadcrumb-item>
                                    <a-button>
                                        <a-space>
                                            <IconPark type="doc-detail" fill="#3491FA"></IconPark>
                                            题目描述
                                        </a-space>
                                    </a-button>
                                </a-breadcrumb-item>
                                <a-breadcrumb-item>
                                    <a-button>
                                        <a-space>
                                            <IconPark type="history" fill="#3491FA"></IconPark>
                                            提交记录
                                        </a-space>
                                    </a-button>
                                </a-breadcrumb-item>
                            </a-breadcrumb>
                        </a-space>
                    </div>
                    <div class="limit" style="margin-top: 4px; margin-left: 4px;">
                        <a-space>
                            <a-tag color="red">Time : 1000ms / 2000ms
                                <template #icon>
                                    <IconPark type="alarm-clock" />
                                </template>
                            </a-tag>
                            <a-tag color="red">Memory : 262144K / 524288K
                                <template #icon>
                                    <IconPark type="cylinder" />
                                </template>
                            </a-tag>
                            <a-tag color="red">language : C, C++ / other
                                <template #icon>
                                    <IconPark type="file-code" />
                                </template>
                            </a-tag>

                        </a-space>
                    </div>
                    <a-typography class="description-content">
                        <a-typography-title class="title">
                            A + B
                        </a-typography-title>

                        <a-typography-paragraph class="description">
                            输入两个整数, A 和 B 请输出它们的和
                        </a-typography-paragraph>

                        <a-typography-title :heading=2> Input </a-typography-title>

                        <a-typography-paragraph class="input-description" blockquote>
                            -1000000000 <= A, B <=1000000000 </a-typography-paragraph>

                                <a-typography-title :heading="2">Output</a-typography-title>
                                <a-typography-paragraph class="output-description" blockquote>
                                    每行输出一个整数
                                </a-typography-paragraph>
                                <a-typography-title :heading="2">Sample Input</a-typography-title>
                                <a-typography-paragraph class="sample-input-description" copyable blockquote>
                                    1 2
                                </a-typography-paragraph>
                                <a-typography-title :heading="2">Sample Output</a-typography-title>
                                <a-typography-paragraph class="sample-output-description" copyable blockquote>
                                    3
                                </a-typography-paragraph>
                                <a-typography-title :heading="2">Hint</a-typography-title>
                                <a-typography-paragraph class="hint-description">

                                </a-typography-paragraph> </a-typography>
                </div>
            </template>

            <template #second>

                <a-split class="right-split" direction="vertical" min="40px" max="0.95" default-size="0.8">
                    <template #first>
                        <div class="right-top">
                            <div class="header">
                                <a-button style="margin-left: 4px;">
                                    <a-space>
                                        <IconPark type="code" theme="outline" fill="#5EDFD6"></IconPark>
                                        代码
                                    </a-space>
                                </a-button>
                            </div>
                            <div class="code">
                                <a-typography>
                                    <a-typography-paragraph>
                                        sadfashngfnjgfvb
                                    </a-typography-paragraph>
                                    <a-typography-paragraph>
                                        sadfashngfnjgfvb
                                    </a-typography-paragraph>
                                </a-typography>
                            </div>

                        </div>
                    </template>
                    <template #second>
                        <div class="right-bottom">
                            <div class="header">
                                <a-space>
                                    <a-button type="outline" style="margin-left: 4px;" status="success">
                                        <a-space>
                                            <IconPark type="play-one" size="16" fill="#5EDFD6"></IconPark>
                                            自测运行
                                        </a-space>
                                    </a-button>
                                    <a-button>
                                        <a-space>
                                            <IconPark type="file-editing" fill="#3491FA"></IconPark>
                                            测试样例
                                        </a-space>
                                    </a-button>
                                    <a-button :status="status">
                                        <a-space>
                                            <IconPark type="text-message" fill="#3491FA"></IconPark>
                                            测试结果
                                        </a-space>
                                    </a-button>
                                    <a-button style="margin-left:30px;" type="primary">
                                        <a-space>
                                            <IconPark type="link-cloud" fill="#fff"></IconPark>
                                            提交代码
                                        </a-space>
                                    </a-button>
                                </a-space>
                            </div>
                        </div>
                    </template>
                </a-split>
            </template>
        </a-split>
    </div>
</template>

<style scoped>
#description-view {
    display: flex;
    height: calc(100vh - 100px);
}

#description-view .description-content, .code {
    padding: 10px;
}

#description-view .left {
    border: 1px;
}

#description-view .left-split {
    width: 100%;
    min-width: 500px;
    border: 2px solid var(--color-border);
    border-radius: 0.5em;
    user-select: none;
    -webkit-user-select: none;
    /* 兼容Webkit浏览器，如Chrome和Safari */
    -moz-user-select: none;
    /* 兼容Firefox浏览器 */
    -ms-user-select: none;
    /* 兼容IE浏览器 */

    /* 防止在移动设备上双击缩放 */
    touch-action: manipulation;
}

#description-view .right-split {
    /* height: 90vh; */
    height: calc(100vh - 120px);
    border-radius: 0.5em;
}

#description-view .header {
    background-color: #f7f8fa;
    height: 35px;
    border-radius: 0.5em;
    overflow: hidden;
    padding: 1px;
}
</style>