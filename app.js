

/* CONTROL DEMO TABS
====================*/

const tabs = document.querySelectorAll('.tab-triggers ul li');

tabs.forEach(function(tab){
  tab.addEventListener('click', tabContent);
});

function tabContent(){
  const contentBlocks = document.querySelectorAll('.swiper-block');
  const thisTrigger = this.getAttribute('data-tab');
  const thisContent = document.querySelector('.swiper-block[data-tab="' + thisTrigger + '"]');

  const codeBtns = document.querySelectorAll('.code-btn');

  codeBtns.forEach(function(btn){
      btn.setAttribute('data-target', thisContent.getAttribute('data-tab'));
  });


  contentBlocks.forEach(function(content){
    content.style.position = 'absolute';
    content.style.height = 0;
  });

  if(thisContent){
    thisContent.style.position = 'relative';
    thisContent.style.height = 'auto';
  }
}



/**
 * 
 * Wrap each textarea with div
 * Has to be initalized before codeMirror
 **/ 

function wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}

const textareas = document.querySelectorAll('textarea');
textareas.forEach(function(textarea){
  const codeBlock = document.createElement('div');
  codeBlock.className = 'code-block';
  wrap(textarea,codeBlock);
});


/**
*
* Initialize all code blocks with codeMirror
*
*/
function initCodemirror() {
  const htmlTextarea = document.querySelectorAll(".html");
  const cssTextarea = document.querySelectorAll(".css");
  const jsTextarea = document.querySelectorAll(".js");

  htmlTextarea.forEach(function(htmla) {
    var html = CodeMirror.fromTextArea(htmla, {
      mode: "xml",
      htmlMode: true,
      theme: "mdn-like",
      lineNumbers: true,
      lineWrapping: true,
      tabSize: 2
    });
  });

  cssTextarea.forEach(function(cssa) {
    var css = CodeMirror.fromTextArea(cssa, {
      mode: "text/css",
      theme: "mdn-like",
      lineNumbers: true,
      lineWrapping: true,
      tabSize: 2
    });
  });

  jsTextarea.forEach(function(jsa) {
    var js = CodeMirror.fromTextArea(jsa, {
      mode: "text/javascript",
      theme: "mdn-like",
      lineNumbers: true,
      lineWrapping: true,
      tabSize: 2
    });
  });
}
initCodemirror();

/**
*
* Copy targeted content to clipboard
*
*/
function copyToClipboard() {
  const targetSelector = this.getAttribute("data-btn");
  var target = document.querySelector('textarea[data-target="' + targetSelector + '"]');
  target.focus();
  target.select();
  try {
    
    document.execCommand("copy");
    displayMsg("success", "Code copied successfully!");
    
  } catch (err) {
    
    displayMsg("error", "Something went wrong. Please try again!");
    
  }
  //console.log(target.value.trim());
}

const codeBtns = document.querySelectorAll(".clip");
codeBtns.forEach(function(btn) {
  btn.addEventListener("click", copyToClipboard);
});

/**
*
* Display Message on the screen
* msgType = success/error
* msg = desired message
* dur = optional. time in miliseconds to display message
*
*/
function displayMsg(msgType, msg, dur) {
  const body = document.body;
  const duration = dur || 2000;
  const msgBlock = document.createElement("p");
  const msgContent = document.createTextNode(msg);
  const navBar = document.querySelector('.navigation-bar');
  msgBlock.appendChild(msgContent);

  if (msgType === "success") {
    msgBlock.className = "alert alert-success";
  } else if (msgType === "error") {
    msgBlock.className = "alert alert-error";
  } else {
    console.error("Unsuported msg type.");
  }

  //navBar.insertBefore(msgBlock, navBar.firstChild);
  body.insertBefore(msgBlock, body.firstChild);
  setTimeout(function() {
    msgBlock.remove();
  }, duration);
}


/**
 * 
 *  Smooth anchor points
 * 
**/
 
  $('.section-anchor').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var animate_offset = 0;
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - animate_offset
        }, 500);
        return false;
      }
    }
  });