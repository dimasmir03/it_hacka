$(() => {
   $("form[class!=check]").css("display","none")
})
$form = {}
function fff(obj) {
   $("form").css("display", "none")
   if (obj.id == "employer") {
      send("auth", "employer")
   }
   else $("form[class=" + obj.id + "]").css("display", "block")
   
}
function aaa(obj) {
   $("form").css("display", "none")
   $("form[class=" + obj.id + "]").css("display", "block")
}
function bbb(obj) {
   $("form").css("display", "none")
   $("form[class=" + obj.id + "]").css("display", "block")
}
click_send = obj => {
   $form = $("." + obj.id + "")
   console.log($form.find("input").length)
}