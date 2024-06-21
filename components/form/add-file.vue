<template>
    <div class="form-group file-area">
        <div class="file-area-wrap">
            <ul>
                <li class="file-list" v-for="(file, index) in fileList" :key="index">
                    <div>
                        <img :src="require(`@/static/images/${file.imgName}.png`)" alt="" srcset="">
                        <span class="btn-delete" @click="deleteElement(index)">
                            <span class="screen-out">파일삭제</span>
                        </span>
                    </div>
                </li>
            </ul>
            <div class="file-add-btn" v-if="addButton">
                <input type="file" id="file1" @change="addFiles" multiple>
                <label for="file1">
                    <img src="~/assets/images/common/ico_add.png" alt="파일추가">
                </label>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            addButton: true,
            fileList: [
                { imgName: "img_item_sample_01" },
                { imgName: "img_test_sample_03" },
                { imgName: "img_none_thumbnail" }
            ]
        };
    },
    methods: {
        deleteElement(index) {
            this.fileList.splice(index, 1);
        },
        addFiles() {
            // if (this.fileList.length < 4) {
            //     this.addButton = !this.addButton
            // }
        }
    }
};
</script>
  
  
<style scoped>
</style>
  