import { d as defineStore } from "../server.mjs";
import "vue";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/hookable/dist/index.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/unctx/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/radix3/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/defu/dist/defu.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/ufo/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/klona/dist/index.mjs";
import "C:/Users/Admin/Desktop/Final/Pharmacy Website/project/node_modules/@unhead/vue/dist/index.mjs";
import "vue/server-renderer";
const useCartStore = defineStore("cart", {
  state: () => ({
    items: []
  }),
  getters: {
    itemCount: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    total: (state) => {
      return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  },
  actions: {
    addItem(product, quantity = 1) {
      const existingItem = this.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity,
          isRx: product.isRx || false
        });
      }
      this.saveToLocalStorage();
    },
    removeItem(productId) {
      this.items = this.items.filter((item) => item.id !== productId);
      this.saveToLocalStorage();
    },
    updateQuantity(productId, quantity) {
      const item = this.items.find((item2) => item2.id === productId);
      if (item) {
        if (quantity <= 0) {
          this.removeItem(productId);
        } else {
          item.quantity = quantity;
          this.saveToLocalStorage();
        }
      }
    },
    clearCart() {
      this.items = [];
      this.saveToLocalStorage();
    },
    // Enhanced cart clearing method with better error handling
    forceCloseCart() {
      try {
        this.items = [];
        const possibleKeys = [
          "pharmacy-cart",
          "pharmacy-cart-guest",
          this.getCartKey()
        ];
        possibleKeys.forEach((key) => {
          try {
            localStorage.removeItem(key);
          } catch (e) {
            console.warn(`Failed to remove ${key} from localStorage:`, e);
          }
        });
        try {
          const userId = this.getCurrentUserId();
          if (userId && userId !== "guest") {
            localStorage.removeItem(`pharmacy-cart-${userId}`);
          }
        } catch (e) {
          console.warn("Failed to clear user-specific cart:", e);
        }
        console.log("Cart successfully cleared and localStorage cleaned");
        return true;
      } catch (error) {
        console.error("Error in forceCloseCart:", error);
        return false;
      }
    },
    // Get current user ID from auth store safely - FIXED VERSION
    getCurrentUserId() {
      return "guest";
    },
    // Get user-specific cart key
    getCartKey() {
      const userId = this.getCurrentUserId();
      return `pharmacy-cart-${userId}`;
    },
    // Save cart to localStorage
    saveToLocalStorage() {
      return;
    },
    // Load cart from localStorage
    loadFromLocalStorage() {
      return;
    },
    // Initialize cart (called when store is created)
    init() {
      this.loadFromLocalStorage();
    }
  }
});
export {
  useCartStore
};
//# sourceMappingURL=cart-Cj2Ys50X.js.map
