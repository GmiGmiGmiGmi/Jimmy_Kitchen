// Paste your deployed Google Apps Script /exec URL here after completing SETUP_EMAIL.md.
const EMAIL_WEB_APP_URL="https://script.google.com/macros/s/AKfycbx_GlnoTU5dU5bFsT6vchJARMj-QFwIrHajwLiMrbQv656zSmW_57cVPQ9oXNTUUXsibg/exec";const state={category:"全部",favoritesOnly:false,cart:JSON.parse(localStorage.getItem("jk-v3-cart")||"{}"),favorites:JSON.parse(localStorage.getItem("jk-v3-favs")||"[]"),rice:localStorage.getItem("jk-v3-rice")||"",customDishes:JSON.parse(localStorage.getItem("jk-v3-custom-dishes")||"[]")};const $=id=>document.getElementById(id),riceChoices=["不要米饭","1碗","2碗","3碗","4碗","5碗"];function allItems(){return [...MENU_ITEMS,...state.customDishes]}function save(){localStorage.setItem("jk-v3-cart",JSON.stringify(state.cart));localStorage.setItem("jk-v3-favs",JSON.stringify(state.favorites));localStorage.setItem("jk-v3-rice",state.rice);try{localStorage.setItem("jk-v3-custom-dishes",JSON.stringify(state.customDishes))}catch(e){toast("照片太大，无法保存；请换一张较小的照片")}}function item(id){return allItems().find(x=>x.id===id)}function filtered(){return allItems().filter(x=>(state.category==="全部"||x.category===state.category)&&(!state.favoritesOnly||state.favorites.includes(x.id)))}function renderCategories(){let a=["全部",...new Set(allItems().map(x=>x.category))];$("categories").innerHTML=a.map(c=>`<button class="catBtn ${state.category===c?"active":""}" data-cat="${c}">${c}</button>`).join("");document.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{state.category=b.dataset.cat;renderCategories();renderMenu()})}function renderMenu(){let a=filtered();$("count").textContent=`${a.length} 道`;$("menuTitle").textContent=state.favoritesOnly?(state.category==="全部"?"我的收藏":`${state.category} · 收藏`):(state.category==="全部"?"全部菜品":state.category);$("menuGrid").innerHTML=a.length?a.map(x=>{let f=state.favorites.includes(x.id),q=state.cart[x.id]||0;return `<article class="card">${x.custom?`<span class="customBadge">自定义</span><button class="customDelete" data-delete-custom="${x.id}">删除菜品</button>`:""}<button class="favBtn ${f?"active":""}" data-fav="${x.id}" aria-label="${f?"取消收藏":"收藏"} ${x.name}" title="${f?"取消收藏":"收藏"}">${f?"♥":"♡"}</button><img src="${x.image}" alt="${x.name}" loading="lazy"><div class="cardBody"><span class="cat">${x.category}</span><div class="name">${x.name}</div><div class="counter"><button data-minus="${x.id}">−</button><b>${q}</b><button class="plus" data-plus="${x.id}">＋</button></div></div></article>`}).join(""):`<div class="empty">这里还没有收藏的菜。</div>`;document.querySelectorAll("[data-fav]").forEach(b=>b.onclick=()=>toggleFav(b.dataset.fav));document.querySelectorAll("[data-minus]").forEach(b=>b.onclick=()=>qty(b.dataset.minus,-1));document.querySelectorAll("[data-plus]").forEach(b=>b.onclick=()=>qty(b.dataset.plus,1));document.querySelectorAll("[data-delete-custom]").forEach(b=>b.onclick=()=>deleteCustomDish(b.dataset.deleteCustom))}function toggleFav(id){state.favorites=state.favorites.includes(id)?state.favorites.filter(x=>x!==id):[...state.favorites,id];save();renderMenu()}function qty(id,d){state.cart[id]=(state.cart[id]||0)+d;if(state.cart[id]<=0)delete state.cart[id];save();renderMenu();renderCart();if(d>0)toast(`${item(id).name} 已加入购物车`)}function removeItem(id){delete state.cart[id];save();renderMenu();renderCart()}function renderCart(){let e=Object.entries(state.cart),t=e.reduce((s,[,q])=>s+q,0);$("cartCount").textContent=t;$("cartHint").textContent=t?"点击查看今晚的订单":"购物车是空的";$("riceSummary").textContent=state.rice||"未选择";$("cartItems").innerHTML=e.length?e.map(([id,q])=>{let x=item(id);return `<div class="cartItem"><img src="${x.image}" alt="${x.name}"><div><div class="cartName">${x.name}</div><div class="qty"><button data-cminus="${id}">−</button><b>${q}</b><button data-cplus="${id}">＋</button></div></div><button class="remove" data-remove="${id}">删除</button></div>`}).join(""):`<div class="empty">购物车还是空的。</div>`;document.querySelectorAll("[data-cminus]").forEach(b=>b.onclick=()=>qty(b.dataset.cminus,-1));document.querySelectorAll("[data-cplus]").forEach(b=>b.onclick=()=>qty(b.dataset.cplus,1));document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>removeItem(b.dataset.remove))}function renderRice(){$("riceOptions").innerHTML=riceChoices.map(r=>`<button class="riceBtn ${state.rice===r?"active":""}" data-rice="${r}">${r}</button>`).join("");document.querySelectorAll("[data-rice]").forEach(b=>b.onclick=()=>{state.rice=b.dataset.rice;$("riceError").classList.add("hidden");save();renderRice();renderCart()})}function showCart(){$("cartDrawer").classList.add("open");$("overlay").classList.remove("hidden");document.body.style.overflow="hidden"}function hideCart(){$("cartDrawer").classList.remove("open");$("overlay").classList.add("hidden");document.body.style.overflow=""}function validate(){if(!Object.keys(state.cart).length){toast("请先选择至少一道菜");return false}if(!state.rice){hideCart();$("riceError").classList.remove("hidden");$("riceSection").scrollIntoView({behavior:"smooth",block:"center"});toast("请选择米饭数量");return false}return true}function orderText(){let lines=Object.entries(state.cart).map(([id,q])=>`• ${item(id).name} × ${q}`);return ["🍽️ 老婆的点餐订单","",...lines,"",`🍚 米饭：${state.rice}`,`⏰ 希望用餐时间：${$("mealTime").value||"未指定"}`,`📝 备注：${$("notes").value.trim()||"无"}`,"","请老公确认接单 👨‍🍳❤️"].join("\n")}function emailBackendReady(){
  return EMAIL_WEB_APP_URL &&
    EMAIL_WEB_APP_URL.startsWith("https://script.google.com/") &&
    EMAIL_WEB_APP_URL.includes("/exec");
}

function setSendingState(on){
  const b=$("shareOrder");
  if(!b)return;
  b.disabled=on;
  b.classList.toggle("sending",on);
  b.textContent=on?"正在发送订单…":"发送订单给老公";
}

async function send(){
  if(!validate())return;

  if(!emailBackendReady()){
    toast("邮件下单还未完成一次性设置");
    alert("请先按 SETUP_EMAIL.md 完成 Google Apps Script 设置，然后把 /exec 网址贴到 app.js 的 EMAIL_WEB_APP_URL。");
    return;
  }

  setSendingState(true);

  try{
    const formData=new URLSearchParams();
    formData.set("order_text",orderText());
    formData.set("nonce",(crypto.randomUUID?crypto.randomUUID():(Date.now()+"-"+Math.random().toString(36).slice(2))));
    formData.set("submitted_at",new Date().toISOString());
    formData.set("app","Jimmy's Kitchen");

    await fetch(EMAIL_WEB_APP_URL,{
      method:"POST",
      mode:"no-cors",
      headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},
      body:formData.toString()
    });

    setSendingState(false);
    showOrderConfirmed();
  }catch(error){
    setSendingState(false);
    toast("订单发送失败，请检查网络后再试一次");
  }
}

async function copy(){if(!validate())return;await navigator.clipboard.writeText(orderText());toast("订单文字已复制")}function randomPick(){let a=[...allItems()].sort(()=>Math.random()-.5),p=[],c=new Set;for(let x of a){if(!c.has(x.category)){p.push(x);c.add(x.category)}if(p.length===3)break}state.cart={};p.forEach(x=>state.cart[x.id]=1);save();renderMenu();renderCart();showCart()}function toast(t){$("toast").textContent=t;$("toast").classList.remove("hidden");clearTimeout(toast.x);toast.x=setTimeout(()=>$("toast").classList.add("hidden"),1700)}let pendingCustomPhoto="";function showAddDish(){$("addDishSheet").classList.add("open");$("overlay").classList.remove("hidden");$("addDishSheet").setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}function hideAddDish(){$("addDishSheet").classList.remove("open");if(!$('cartDrawer').classList.contains('open'))$("overlay").classList.add("hidden");$("addDishSheet").setAttribute("aria-hidden","true");document.body.style.overflow=""}function resetAddDish(){$("customDishName").value="";$("customDishCategory").value="肉类";$("customDishPhoto").value="";pendingCustomPhoto="";$("customPhotoPreview").innerHTML="可以直接从 iPhone 相册选择一张照片<br>不选也可以保存"}function compressPhoto(file){return new Promise((resolve,reject)=>{let r=new FileReader;r.onload=()=>{let im=new Image;im.onload=()=>{let max=720,scale=Math.min(1,max/Math.max(im.width,im.height)),w=Math.max(1,Math.round(im.width*scale)),h=Math.max(1,Math.round(im.height*scale)),c=document.createElement("canvas");c.width=w;c.height=h;c.getContext("2d").drawImage(im,0,0,w,h);resolve(c.toDataURL("image/jpeg",.68))};im.onerror=reject;im.src=r.result};r.onerror=reject;r.readAsDataURL(file)})}async function previewCustomPhoto(){let f=$("customDishPhoto").files[0];if(!f){pendingCustomPhoto="";return}try{pendingCustomPhoto=await compressPhoto(f);$("customPhotoPreview").innerHTML=`<img src="${pendingCustomPhoto}" alt="预览">`}catch(e){toast("这张图片无法读取")}}function saveCustomDish(){let name=$("customDishName").value.trim();if(!name){toast("请先输入菜名");$("customDishName").focus();return}let id="custom-"+Date.now();state.customDishes.push({id,name,category:$("customDishCategory").value,image:pendingCustomPhoto||"images/custom_dish.svg",custom:true});save();state.category="全部";state.favoritesOnly=false;$("favOnly").classList.remove("active");$("favOnly").textContent="❤️ 收藏";renderCategories();renderMenu();hideAddDish();resetAddDish();toast(`${name} 已加入菜单`)}function deleteCustomDish(id){let x=item(id);if(!x||!x.custom)return;if(!confirm(`删除「${x.name}」？`))return;state.customDishes=state.customDishes.filter(d=>d.id!==id);delete state.cart[id];state.favorites=state.favorites.filter(f=>f!==id);save();renderCategories();renderMenu();renderCart();toast("自定义菜品已删除")}$("favOnly").onclick=()=>{state.favoritesOnly=!state.favoritesOnly;$("favOnly").classList.toggle("active",state.favoritesOnly);$("favOnly").textContent=state.favoritesOnly?"❤️ 只看收藏":"❤️ 收藏";renderMenu()};$("randomBtn").onclick=randomPick;$("openAddDish").onclick=showAddDish;$("closeAddDish").onclick=()=>{hideAddDish();resetAddDish()};$("cancelAddDish").onclick=()=>{hideAddDish();resetAddDish()};$("customDishPhoto").onchange=previewCustomPhoto;$("saveCustomDish").onclick=saveCustomDish;$("cartBar").onclick=showCart;$("closeCart").onclick=hideCart;$("overlay").onclick=()=>{hideCart();hideAddDish()};$("shareOrder").onclick=send;$("copyOrder").onclick=copy;renderCategories();renderMenu();renderRice();renderCart();

function showOrderConfirmed(){
  const overlay=document.getElementById("orderConfirmOverlay");
  if(!overlay)return;
  overlay.classList.remove("hidden");
  document.body.style.overflow="hidden";
}
function closeOrderConfirmed(){
  const overlay=document.getElementById("orderConfirmOverlay");
  if(!overlay)return;
  overlay.classList.add("hidden");
  document.body.style.overflow="";
}
document.getElementById("closeOrderConfirm").onclick=closeOrderConfirmed;
