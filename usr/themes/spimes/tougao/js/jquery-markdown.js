$(document).ready(function(){

  var textarea = $("#md-editor");

  $("#md-bold").click(function () {
    textarea.mdBold();
  });
  $("#md-italic").click(function () {
    textarea.mdItalic();
  });
  $("#md-h1").click(function () {
    textarea.mdHeader({number: 1});
  });
  $("#md-h2").click(function () {
    textarea.mdHeader({number: 2});
  });
  $("#md-h3").click(function () {
    textarea.mdHeader({number: 3});
  });
  $("#md-h4").click(function () {
    textarea.mdHeader({number: 4});
  });
  $("#md-link").click(function () {
    if($("#md-build-i").attr("class") == "fa fa-eye") textarea.mdLink();
  });
  $("#md-image").click(function () {
    if($("#md-build-i").attr("class") == "fa fa-eye") textarea.mdImage();
  });
  $("#md-code").click(function () {
    textarea.mdCode();
  });
  $("#md-hr").click(function () {
    textarea.mdHr();
  });
  $("#md-quote").click(function () {
    textarea.mdQuote();
  });
  $("#md-numList").click(function () {
    textarea.mdNumberedList();
  });
  $("#md-bulletList").click(function () {
    textarea.mdBulletList();
  });
  $("#md-build").click(function () {
    if($("#md-build-i").attr("class") == "fa fa-eye"){
      textarea.hide();
      $("#md-build-div").show();
      $("#md-build-i").attr("class", "fa fa-eye-slash");
      var parser = new HyperDown;
      buildHtml = parser.makeHtml(textarea.val());
      $("#md-build-div").html(buildHtml);
    }else{
      $("#md-build-div").hide();
      textarea.show();
      $("#md-build-i").attr("class", "fa fa-eye");
    }
  });
  $("#md-fwen").click(function () {
    textarea.mdfwen();
  });
});


$.fn.extend({
    insertValue: function(insertValue) {
        if(insertValue == false) return null;
        if($("#md-build-i").attr("class") == "fa fa-eye-slash") return null;
        var $t = $(this)[0];
        if ($t.selectionStart || $t.selectionStart == "0") {
            var startPos = $t.selectionStart;
            var endPos = $t.selectionEnd;
            var scrollTop = $t.scrollTop;
            $t.value = $t.value.substring(0, startPos) + insertValue + $t.value.substring(endPos, $t.value.length);
            this.focus();
            $t.selectionStart = startPos + insertValue.length;
            $t.selectionEnd = startPos + insertValue.length;
            $t.scrollTop = scrollTop;
        } else {
            this.value += insertValue;
            this.focus();
        }
    }
});

/**
 *
 * jquery-markdown 1.0
 * @author Can Geliş
 * @license License file must be attached with the source code (MIT License)
 *
 */

$.fn.textReplace = function(options) {
    var settings = $.extend({
        selected: function() {
            return "";
        },
        no_selection: function() {
            return "";
        }
    }, options);
    var textarea = this, actual = this.get(0);
    var selectionStart = actual.selectionStart, selectionEnd = actual.selectionEnd;
    var text_to_replace = $(textarea).val().substring(selectionStart, selectionEnd);

    if (selectionStart === selectionEnd) {
        $(textarea).insertValue(settings.no_selection());
    } else {
        $(textarea).insertValue(settings.selected(text_to_replace));
    }
};

$.fn.mdBold = function(options) {
    var settings = $.extend({
        default: "加粗文字"
    }, options);
    $(this).textReplace({
        selected: function(text) {
            return "**" + text + "**";
        },
        no_selection: function() {
            return "**" + settings.default + "**";
        }
    });
};
$.fn.mdItalic = function(options) {
    var settings = $.extend({
        default: "斜体文字"
    }, options);
    $(this).textReplace({
        selected: function(text) {
            return "*" + text + "*";
        },
        no_selection: function() {
            return "*" + settings.default + "*";
        }
    });
};
$.fn.mdHeader = function(options) {
    var settings = $.extend({
        default: "标题文字",
        number: 1
    }, options);
    $(this).textReplace({
        selected: function(text) {
            return '\n' + "#".repeat(settings.number) + " " + text + '\n\n';
        },
        no_selection: function() {
            return '\n' + "#".repeat(settings.number) + " " + settings.default + '\n\n';
        }
    });
};
$.fn.mdLink = function(options) {
    var settings = $.extend({
        default_text: "链接描述",
        default_url: prompt('请输入链接地址')
    }, options);
    $(this).textReplace({
        selected: function(text) {
            if(settings.default_url !== null && settings.default_url !== "" && settings.default_url !== false){
                return '[' + text + '](' + settings.default_url + ')';
            }else{
                return false;
            }
        },
        no_selection: function() {
            if(settings.default_url !== null && settings.default_url !== "" && settings.default_url !== false){
                return '[' + settings.default_text + '](' + settings.default_url + ')';
            }else{
                return false;
            }
        }
    });
};
$.fn.mdImage = function(options) {
    var settings = $.extend({
        default_alt_text: "图片描述",
        default_image_url: prompt('请输入图片地址')
    }, options);
    $(this).textReplace({
        selected: function(image_alt_text) {
            if(settings.default_image_url !== null && settings.default_image_url !== "" && settings.default_image_url !== false){
              return '![' + image_alt_text + '](' + settings.default_image_url + ')';
            }else{
              return false;
            }
        },
        no_selection: function() {
            if(settings.default_image_url !== null && settings.default_image_url !== "" && settings.default_image_url !== false){
                return '![' + settings.default_alt_text + '](' + settings.default_image_url + ')';
            }else{
                return false;
            }
        }
    });
};

$.fn.mdCode = function(options) {
    var settings = $.extend({
        default: "请输入代码"
    }, options);
    $(this).textReplace({
        selected: function(code) {
            lines = code.split('\n');
            if (lines.length === 1) {
                return '`' + code + '`';
            } else {
                final_code = "";
                for (i = 0; i < lines.length; i++) {
                    final_code += "    " + lines[i] + '\n';
                }
                return final_code;
            }
        },
        no_selection: function() {
            return '`' + settings.default + '`';
        }
    });
};
$.fn.mdHr = function(options) {
    var settings = $.extend({
        default: ""
    }, options);
    $(this).textReplace({
        selected: function(text) {
            return text + "\n\n----------\n\n";
        },
        no_selection: function() {
            return "\n\n----------\n\n";
        }
    });
};
$.fn.mdQuote = function(options) {
    var settings = $.extend({
        default: "引用文字"
    }, options);
    $(this).textReplace({
        selected: function(code) {
            lines = code.split('\n');
            if (lines.length === 1) {
                return '\n> ' + code + '\n';
            } else {
                final_code = "\n";
                for (i = 0; i < lines.length; i++) {
                    final_code += "> " + lines[i] + '\n';
                }
                return final_code;
            }
        },
        no_selection: function() {
            return '\n> ' + settings.default + '\n';
        }
    });
}
$.fn.mdfwen = function(options) {
    var settings = $.extend({
        default: "# 欢迎使用Markdown编辑器\n\n## 欢迎使用Markdown编辑器\n\n### 欢迎使用Markdown编辑器\n\n你好！ 这是你第一次使用 **Markdown编辑器** 所展示的欢迎页。如果你想学习如何使用Markdown编辑器, 可以仔细阅读这篇文章，了解一下Markdown的基本语法知识。\n\n## 功能样式\n\n撤销：<kbd>Ctrl/Command</kbd> + <kbd>Z</kbd>\n\n重做：<kbd>Ctrl/Command</kbd> + <kbd>Y</kbd>\n\n## 如何改变文本的样式\n\n*强调文本* _强调文本_\n\n**加粗文本** __加粗文本__\n\n~~删除文本~~\n\n> 引用文本\n\n## 插入链接与图片\n\n链接: [link](https://www.csdn.net/).\n\n## 生成一个适合你的列表\n\n1. 项目1\n2. 项目2\n3. 项目3\n\n##为文字添加背景色\n\n<table><tr><td bgcolor=yellow>背景色yellow</td></tr></table>"
    }, options);
    $(this).textReplace({
        selected: function(code) {
              return '\n' + settings.default + '\n';
        },
        no_selection: function() {
            return '\n' + settings.default + '\n';
        }
    });
}
$.fn.mdNumberedList = function(options) {
    var settings = $.extend({
        default: "列表内容"
    }, options);
    $(this).textReplace({
        selected: function(code) {
            lines = code.split('\n');
            if (lines.length === 1) {
                return '\n1. ' + code + '\n';
            } else {
                final_code = "\n";
                for (i = 0; i < lines.length; i++) {
                    final_code += (i+1)+". " + lines[i] + '\n';
                }
                return final_code;
            }
        },
        no_selection: function() {
            return '\n1. ' + settings.default + '\n';
        }
    });
}
$.fn.mdBulletList = function(options) {
    var settings = $.extend({
        default: "列表内容"
    }, options);
    $(this).textReplace({
        selected: function(code) {
            lines = code.split('\n');
            if (lines.length === 1) {
                return '\n- ' + code + '\n';
            } else {
                final_code = "\n";
                for (i = 0; i < lines.length; i++) {
                    final_code += "- " + lines[i] + '\n';
                }
                return final_code;
            }
        },
        no_selection: function() {
            return '\n- ' + settings.default + '\n';
        }
    });
}
