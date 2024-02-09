/**
 * widget.js - high-level interface for blessed
 * Copyright (c) 2013-2015, Christopher Jeffrey and contributors (MIT License).
 * https://github.com/chjj/blessed
 */

var widget = {
  'Node': require("./widgets/node"),
  'Screen': require("./widgets/screen"),
  'Element': require("./widgets/element"),
  'Box': require("./widgets/box"),
  'Text': require("./widgets/text"),
  'Line': require("./widgets/line"),
  'ScrollableBox': require("./widgets/scrollablebox"),
  'ScrollableText': require("./widgets/scrollabletext"),
  'BigText': require("./widgets/bigtext"),
  'List': require("./widgets/list"),
  'Form': require("./widgets/form"),
  'Input': require("./widgets/input"),
  'Textarea': require("./widgets/textarea"),
  'Textbox': require("./widgets/textbox"),
  'Button': require("./widgets/button"),
  'ProgressBar': require("./widgets/progressbar"),
  'FileManager': require("./widgets/filemanager"),
  'Checkbox': require("./widgets/checkbox"),
  'RadioSet': require("./widgets/radioset"),
  'RadioButton': require("./widgets/radiobutton"),
  'Prompt': require("./widgets/prompt"),
  'Question': require("./widgets/question"),
  'Message': require("./widgets/message"),
  'Loading': require("./widgets/loading"),
  'Listbar': require("./widgets/listbar"),
  'Log': require("./widgets/log"),
  'Table': require("./widgets/table"),
  'ListTable': require("./widgets/listtable"),
  'Terminal': require("./widgets/terminal"),
  'Image': require("./widgets/image"),
  'ANSIImage': require("./widgets/ansiimage"),
  'OverlayImage': require("./widgets/overlayimage"),
  'Video': require("./widgets/video"),
  'Layout': require("./widgets/layout"),
  
  'node': require("./widgets/node"),
  'screen': require("./widgets/screen"),
  'element': require("./widgets/element"),
  'box': require("./widgets/box"),
  'text': require("./widgets/text"),
  'line': require("./widgets/line"),
  'scrollablebox': require("./widgets/scrollablebox"),
  'scrollabletext': require("./widgets/scrollabletext"),
  'bigtext': require("./widgets/bigtext"),
  'list': require("./widgets/list"),
  'form': require("./widgets/form"),
  'input': require("./widgets/input"),
  'textarea': require("./widgets/textarea"),
  'textbox': require("./widgets/textbox"),
  'button': require("./widgets/button"),
  'progressbar': require("./widgets/progressbar"),
  'filemanager': require("./widgets/filemanager"),
  'checkbox': require("./widgets/checkbox"),
  'radioset': require("./widgets/radioset"),
  'radiobutton': require("./widgets/radiobutton"),
  'prompt': require("./widgets/prompt"),
  'question': require("./widgets/question"),
  'message': require("./widgets/message"),
  'loading': require("./widgets/loading"),
  'listbar': require("./widgets/listbar"),
  'log': require("./widgets/log"),
  'table': require("./widgets/table"),
  'listtable': require("./widgets/listtable"),
  'terminal': require("./widgets/terminal"),
  'image': require("./widgets/image"),
  'ansiimage': require("./widgets/ansiimage"),
  'overlayimage': require("./widgets/overlayimage"),
  'video': require("./widgets/video"),
  'layout': require("./widgets/layout")
};

widget.aliases = {
  'ListBar': 'Listbar',
  'PNG': 'ANSIImage'
};

Object.keys(widget.aliases).forEach(function(key) {
  var name = widget.aliases[key];
  widget[key] = widget[name];
  widget[key.toLowerCase()] = widget[name];
});

module.exports = widget;