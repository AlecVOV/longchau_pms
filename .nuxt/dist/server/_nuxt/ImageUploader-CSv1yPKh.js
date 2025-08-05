import { ref, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { u as useNotificationsStore } from "./notifications-CugxVEC_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/hookable/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/unctx/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/radix3/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/defu/dist/defu.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/ufo/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/klona/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = {
  __name: "ImageUploader",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    maxImages: {
      type: Number,
      default: 10
    },
    maxSizeMB: {
      type: Number,
      default: 5
    },
    acceptedTypes: {
      type: String,
      default: "image/jpeg,image/jpg,image/png,image/gif,image/webp"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showImageDetails: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "upload-complete", "upload-error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    useNotificationsStore();
    const images = ref([...props.modelValue]);
    const isDragOver = ref(false);
    const uploading = ref(false);
    const uploadingCount = ref(0);
    const totalUploadCount = ref(0);
    const uploadProgress = ref(0);
    const errors = ref([]);
    const selectedImage = ref(null);
    watch(() => props.modelValue, (newValue) => {
      images.value = [...newValue];
    }, { deep: true });
    watch(images, (newImages) => {
      emit("update:modelValue", newImages);
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "image-uploader" }, _attrs))} data-v-3873cc1d><div class="${ssrRenderClass([
        "border-2 border-dashed rounded-lg p-6 text-center transition-colors",
        unref(isDragOver) ? "border-primary-500 bg-primary-50" : "border-gray-300",
        __props.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-primary-400"
      ])}" data-v-3873cc1d>`);
      if (!unref(uploading) && !unref(images).length) {
        _push(`<div class="space-y-2" data-v-3873cc1d><svg class="mx-auto w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3873cc1d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" data-v-3873cc1d></path></svg><div data-v-3873cc1d><p class="text-sm text-gray-600" data-v-3873cc1d><span class="font-medium text-primary-600" data-v-3873cc1d>Click to upload</span> or drag and drop </p><p class="text-xs text-gray-500" data-v-3873cc1d>PNG, JPG, GIF up to ${ssrInterpolate(__props.maxSizeMB)}MB each</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(uploading)) {
        _push(`<div class="space-y-3" data-v-3873cc1d><div class="animate-spin w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full mx-auto" data-v-3873cc1d></div><p class="text-sm text-gray-600" data-v-3873cc1d>Uploading ${ssrInterpolate(unref(uploadingCount))} of ${ssrInterpolate(unref(totalUploadCount))} images...</p><div class="w-full bg-gray-200 rounded-full h-2" data-v-3873cc1d><div class="bg-primary-600 h-2 rounded-full transition-all duration-300" style="${ssrRenderStyle({ width: unref(uploadProgress) + "%" })}" data-v-3873cc1d></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(images).length && !unref(uploading)) {
        _push(`<div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-v-3873cc1d><!--[-->`);
        ssrRenderList(unref(images), (image, index) => {
          _push(`<div class="relative group" data-v-3873cc1d><img${ssrRenderAttr("src", image.preview || image.url)}${ssrRenderAttr("alt", image.alt || `Image ${index + 1}`)} class="w-full h-24 object-cover rounded-lg" data-v-3873cc1d><div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2" data-v-3873cc1d><button class="${ssrRenderClass([
            "p-1 rounded text-xs",
            image.isPrimary ? "bg-yellow-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
          ])}"${ssrRenderAttr("title", image.isPrimary ? "Primary image" : "Set as primary")} data-v-3873cc1d><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-v-3873cc1d><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" data-v-3873cc1d></path></svg></button><button class="p-1 bg-red-500 text-white rounded hover:bg-red-600" title="Remove image" data-v-3873cc1d><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" data-v-3873cc1d><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-v-3873cc1d></path></svg></button></div>`);
          if (image.isPrimary) {
            _push(`<div class="absolute top-1 left-1" data-v-3873cc1d><span class="bg-yellow-500 text-white text-xs px-1 py-0.5 rounded" data-v-3873cc1d>Primary</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (unref(images).length < __props.maxImages) {
          _push(`<div class="w-full h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary-400 hover:bg-gray-50 transition-colors" data-v-3873cc1d><svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-v-3873cc1d><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-v-3873cc1d></path></svg></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><input type="file" multiple${ssrRenderAttr("accept", __props.acceptedTypes)} class="hidden"${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""} data-v-3873cc1d>`);
      if (unref(errors).length) {
        _push(`<div class="mt-3 space-y-1" data-v-3873cc1d><!--[-->`);
        ssrRenderList(unref(errors), (error) => {
          _push(`<p class="text-sm text-red-600" data-v-3873cc1d>${ssrInterpolate(error)}</p>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showImageDetails && unref(selectedImage)) {
        _push(`<div class="mt-4 p-4 border rounded-lg bg-gray-50" data-v-3873cc1d><h4 class="font-medium mb-3" data-v-3873cc1d>Image Details</h4><div class="space-y-3" data-v-3873cc1d><div data-v-3873cc1d><label class="block text-sm font-medium text-gray-700 mb-1" data-v-3873cc1d>Alt Text</label><input${ssrRenderAttr("value", unref(selectedImage).alt)} type="text" class="input" placeholder="Describe this image for accessibility" data-v-3873cc1d></div><div data-v-3873cc1d><label class="block text-sm font-medium text-gray-700 mb-1" data-v-3873cc1d>Caption</label><input${ssrRenderAttr("value", unref(selectedImage).caption)} type="text" class="input" placeholder="Optional image caption" data-v-3873cc1d></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageUploader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ImageUploader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3873cc1d"]]);
export {
  ImageUploader as default
};
//# sourceMappingURL=ImageUploader-CSv1yPKh.js.map
