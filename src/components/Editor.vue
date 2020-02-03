<template>
  <b-container class="editor">
    <b-row class="outer-container">
      <b-col>
        <h3>Kontrollpanel</h3>
      </b-col>
    </b-row>
    <b-row>
      <div id="editor-container">
        <ckeditor
          :editor="editor"
          v-model="editorData"
          :config="editorConfig"
        ></ckeditor>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  name: "editor",
  data() {
    return {
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {}
    };
  }
};
</script>

<style lang="scss" scoped>
.editor {
  max-width: 700px;
  position: relative;
  .outer-container {
  }
  #editor-container {
    width: 100%;
  }
}
</style>
