/**
 * Thư viện javascript cho ứng dụng eSMS
 * @version 1.0.0.0
 * @author ViHAT
 * @copyright Copyright ©  cuongtm93  2018
 * @compiler Bridge.NET 17.1.0
 */
Bridge.assembly("eSMS", function ($asm, globals) {
    "use strict";

    /**
     * @memberof Retyped
     * @callback Retyped.jquery.JQuery.Ajax.ErrorCallback
     * @param   {Retyped..JQuery.jqXHR$1}    jqXHR          
     * @param   {System.String}              textStatus     
     * @param   {string}                     errorThrown
     * @return  {void}
     */

    /** @namespace Retyped */

    /**
     * @memberof Retyped
     * @callback Retyped.jquery.JQuery.Ajax.SuccessCallback
     * @param   {System.Object}              data          
     * @param   {System.String}              textStatus    
     * @param   {Retyped..JQuery.jqXHR$1}    jqXHR
     * @return  {void}
     */

    Bridge.define("Kernel.Ajax", {
        fields: {
            /**
             * Hàm sẽ gọi khi thực gọi ajax thành công
             *
             * @instance
             * @public
             * @memberof Kernel.Ajax
             * @function success
             * @type Retyped.jquery.JQuery.Ajax.SuccessCallback
             */
            success: null,
            request: null,
            /**
             * Hàm sẽ gọi khi thực gọi ajax thất bại
             *
             * @instance
             * @public
             * @memberof Kernel.Ajax
             * @function error
             * @type Retyped.jquery.JQuery.Ajax.ErrorCallback
             */
            error: null,
            /**
             * relative or absolute url
             *
             * @instance
             * @public
             * @memberof Kernel.Ajax
             * @function Url
             * @type string
             */
            Url: null,
            /**
             * ajax data
             *
             * @instance
             * @public
             * @memberof Kernel.Ajax
             * @function data
             * @type System.Object
             */
            data: null,
            /**
             * Asynchronous
             *
             * @instance
             * @public
             * @memberof Kernel.Ajax
             * @function Async
             * @type boolean
             */
            Async: false,
            /**
             * Http Method
             *
             * @instance
             * @public
             * @memberof Kernel.Ajax
             * @function Method
             * @type string
             */
            Method: null,
            /**
             * Nếu ValidDataType khác null thì
              : Kiểm tra kiểu dữ liệu trước khi gửi ajax.
             Nếu nó bằng null thì không kiểm tra.
             *
             * @instance
             * @private
             * @memberof Kernel.Ajax
             * @default true
             * @type boolean
             */
            _isValidRequest: false
        },
        ctors: {
            init: function () {
                this._isValidRequest = true;
            },
            ctor: function () {
                this.$initialize();
                this.SetDefaultParameters();
            }
        },
        methods: {
            /**
             * Thiết lập tham số mặc định
             *
             * @instance
             * @public
             * @this Kernel.Ajax
             * @memberof Kernel.Ajax
             * @return  {void}
             */
            SetDefaultParameters: function () {
                this.Async = true;
                this.Method = "GET";
            },
            /**
             * Gọi ajax
             *
             * @instance
             * @public
             * @this Kernel.Ajax
             * @memberof Kernel.Ajax
             * @return  {void}
             */
            Request: function () {
                this.ValidateRequest();
                this.PrepareAjaxOptions();
                debugger;
                if (this._isValidRequest) {
                    this.request = jQuery.ajax({ data: this.data, async: this.Async, method: this.Method, url: this.Url, success: this.success, error: this.error });
                }
            },
            ValidateRequest: function () {
                this._isValidRequest = !System.String.isNullOrWhiteSpace(this.Url);

                if (!this._isValidRequest) {
                    this.ShowMessageForNotValidRequest();
                }
            },
            ShowMessageForNotValidRequest: function () {
                alert("Request không hợp lệ");
                var ajaxRequestParams = { Url: this.Url, data: this.data, Method: this.Method, Async: this.Async };
                System.Console.WriteLine("Request không hợp lệ : ");
                System.Console.WriteLine(ajaxRequestParams);
            },
            ShowNotSupportMethod: function () {
                System.Console.WriteLine("Hiện tại thư viện chưa hỗ trợ phương thức này");
            },
            PrepareAjaxOptions: function () {
                var $t;
                debugger;
                if (this.data == null) {
                    this.data = { };
                }
                do {
                    ($t = Bridge.Reflection.getTypeName(Bridge.getType(this.data)));
                    if (Bridge.referenceEquals($t, "String")) {
                        this.Url = System.String.concat(this.Url, this.data);
                        this.data = { };
                        break;
                    }

                    if (Bridge.referenceEquals($t, "Object")) {
                        if (Bridge.referenceEquals(this.Method, "GET")) {
                            this.data = jQuery.param(this.data);
                            break;
                        }
                    }

                    if (Bridge.referenceEquals($t, "Object")) {
                        if (Bridge.referenceEquals(this.Method, "POST")) {
                            break;
                        }
                    }

                    {
                        this.data = jQuery.param(this.data.toJSON());
                        break;
                    }
                } while (false);
            }
        }
    });

    Bridge.define("Bridge.Razor.Generated.ViewRegistration");

    Bridge.define("console");

    Bridge.define("Esms.App", {
        statics: {
            ctors: {
                init: function () {
                    Bridge.ready(this.Main);
                }
            },
            methods: {
                /**
                 * Set Main Method to be automatically called when all the JavaScript has been loaded and 
                  the Page is ready. If jQuery has been included in the Page, 
                  the jQuery ready handler is called, otherwise DOMContentLoaded is used.
                 *
                 * @static
                 * @public
                 * @this Esms.App
                 * @memberof Esms.App
                 * @return  {void}
                 */
                Main: function () {
                    document.getElementById("targetbtn").onclick = Esms.App.Targetbtn_clickAsync;
                },
                Targetbtn_clickAsync: function (ev) {
                    var $step = 0,
                        $task1, 
                        $taskResult1, 
                        $task2, 
                        $taskResult2, 
                        $jumpFromFinally, 
                        GetTest, 
                        $t, 
                        Test1, 
                        PostTest, 
                        Test2, 
                        $asyncBody = Bridge.fn.bind(this, function () {
                            for (;;) {
                                $step = System.Array.min([0,1,2], $step);
                                switch ($step) {
                                    case 0: {
                                        GetTest = ($t = new Kernel.AjaxTask(), $t.Url = "http://localhost:52084/home/TestGet", $t.Method = "GET", $t.data = { }, $t);
                                        $task1 = GetTest.Execute();
                                        $step = 1;
                                        $task1.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        Test1 = $taskResult1;
                                        if (!GetTest.requestError) {
                                            document.getElementById("targetbtn").innerHTML = System.String.concat(document.getElementById("targetbtn").innerHTML, ("get" + Test1.id));
                                        }

                                        PostTest = ($t = new Kernel.AjaxTask(), $t.Url = "http://localhost:52084/home/TestPost", $t.Method = "POST", $t.data = { }, $t);
                                        $task2 = PostTest.Execute();
                                        $step = 2;
                                        $task2.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult2 = $task2.getAwaitedResult();
                                        Test2 = $taskResult2;

                                        if (!PostTest.requestError) {
                                            document.getElementById("targetbtn").innerHTML = System.String.concat(document.getElementById("targetbtn").innerHTML, ("post " + Test2.id));
                                        }
                                        return;
                                    }
                                    default: {
                                        return;
                                    }
                                }
                            }
                        }, arguments);

                    $asyncBody();
                }
            }
        },
        $entryPoint: true
    });

    Bridge.define("Javascript");

    /**
     * Định nghĩa này để gọi 1 số hàm json sẵn có của browser
     *
     * @public
     * @class JSON
     */
    Bridge.define("JSON");

    Bridge.define("Kernel.Attributes.TestedAttribute", {
        inherits: [System.Attribute],
        ctors: {
            ctor: function (msg) {
                if (msg === void 0) { msg = ""; }

                this.$initialize();
                System.Attribute.ctor.call(this);
                if (!System.String.isNullOrWhiteSpace(msg)) {
                    System.Console.WriteLine(msg);
                }
            }
        }
    });

    /** @namespace Kernel.Browser */

    /**
     * Xử lý dữ liệu trên trình duyệt
     *
     * @public
     * @class Kernel.Browser.Data
     */
    Bridge.define("Kernel.Browser.Data", {
        methods: {
            /**
             * Lấy giá trị của element
             *
             * @instance
             * @public
             * @this Kernel.Browser.Data
             * @memberof Kernel.Browser.Data
             * @param   {Function}    T             Kiểu đối tượng trong lớp Retyped.dom
             * @param   {string}      indentifer    Id
             * @return  {T}
             */
            getValueById: function (T, indentifer) {
                return jQuery(Kernel.SelectorExtensions.Id(indentifer)).val();
            },
            /**
             * Hàm document.getElementbyId
             *
             * @instance
             * @public
             * @this Kernel.Browser.Data
             * @memberof Kernel.Browser.Data
             * @param   {Function}    T             Kiểu đối tượng trong lớp Retyped.dom
             * @param   {string}      indentifer    Id
             * @return  {T}
             */
            getElementById: function (T, indentifer) {
                return Bridge.cast(jQuery(Kernel.SelectorExtensions.Id(indentifer)).first()[0], T);
            },
            setValue: function (indentifer, value) {
                jQuery(indentifer).val(value);
            },
            /**
             * Lấy kendo grid để xử lý
             *
             * @instance
             * @public
             * @this Kernel.Browser.Data
             * @memberof Kernel.Browser.Data
             * @param   {string}    indentifer    Id
             * @return  {object}
             */
            getKendoGrid: function (indentifer) {
                return jQuery(Kernel.SelectorExtensions.Id(indentifer)).data("kendoGrid");
            },
            /**
             * Refresh lại dữ liệu cho kendogrid
             *
             * @instance
             * @public
             * @this Kernel.Browser.Data
             * @memberof Kernel.Browser.Data
             * @param   {object}    grid    grid được lấy từ hàm getKendoGrid
             * @return  {void}
             */
            kendGridReloadData: function (grid) {
                grid.dataSource.read();
            },
            /**
             * Jquery selector
             *
             * @instance
             * @public
             * @this Kernel.Browser.Data
             * @memberof Kernel.Browser.Data
             * @param   {string}    jquerySelector
             * @return  {object}
             */
            select: function (jquerySelector) {
                return jQuery(jquerySelector);
            }
        }
    });

    Bridge.define("Kernel.Class");

    Bridge.define("Kernel.KendoDatePicker", {
        fields: {
            /**
             * kendo namespace
             *
             * @instance
             * @public
             * @memberof Kernel.KendoDatePicker
             * @type object
             */
            kendo: null,
            /**
             * Jquery prefix
             *
             * @instance
             * @public
             * @memberof Kernel.KendoDatePicker
             * @type object
             */
            jquery: null,
            _kendoDatePickerId: null,
            datePicker: null
        },
        props: {
            /**
             * Truy cập @this khi đang trong hàm xử lý event
             *
             * @instance
             * @public
             * @readonly
             * @memberof Kernel.KendoDatePicker
             * @function this
             * @type Kernel.KendoDatePicker
             */
            this: {
                get: function () {
                    return new Kernel.KendoDatePicker(this._kendoDatePickerId);
                }
            },
            object: {
                get: function () {
                    return document.getElementById(Kernel.SelectorExtensions.Id(this._kendoDatePickerId));
                }
            }
        },
        ctors: {
            init: function () {
                this.kendo = kendo;
                this.jquery = jQuery;
            },
            ctor: function (Id) {
                this.$initialize();
                this._kendoDatePickerId = Id;
                this.datePicker = this.jquery(Kernel.SelectorExtensions.Id(this._kendoDatePickerId)).data("kendoDatePicker");
                this.jquery(Kernel.SelectorExtensions.Id(this._kendoDatePickerId)).kendoDatePicker();

            }
        },
        methods: {
            GetDateTime: function () {
                return this.datePicker.value();
            },
            SetDateTime: function (dateTime) {
                try {
                    var kendoTime = this.kendo.toString(this.kendo.parseDate(dateTime), "MM/dd/yyyy");
                    this.datePicker.value(kendoTime);

                }
                catch (err) {
                    err = System.Exception.create(err);
                    System.Console.WriteLine(System.String.format("Error :{0}", [err.Message]));
                }

            },
            /**
             * Lấy ngày hiện tại và chọn ngày này
             *
             * @instance
             * @public
             * @this Kernel.KendoDatePicker
             * @memberof Kernel.KendoDatePicker
             * @return  {void}
             */
            SetToday: function () {
                var datePicker = new Kernel.KendoDatePicker(this._kendoDatePickerId);
                datePicker.SetDateTime(System.DateTime.getNow());
            },
            /**
             * Làm cho datepicker trở thành width 100%
             *
             * @instance
             * @public
             * @this Kernel.KendoDatePicker
             * @memberof Kernel.KendoDatePicker
             * @return  {void}
             */
            getFullWidth: function () {
                this["this"];
                this.this.object;
            },
            /**
             * Làm cho datepicker chỉ đọc , không ghi được
             *
             * @instance
             * @public
             * @this Kernel.KendoDatePicker
             * @memberof Kernel.KendoDatePicker
             * @return  {void}
             */
            ReadOnly: function () {
                this.jquery(Kernel.SelectorExtensions.Id(this._kendoDatePickerId)).attr("readonly", true);
            }
        }
    });

    Bridge.define("Kernel.Others.IVoid", {
        $kind: "interface"
    });

    Bridge.define("Kernel.Http.HttpMethod");

    Bridge.define("Kernel.Others.IFunction", {
        $kind: "interface"
    });

    Bridge.define("Kernel.SelectorExtensions", {
        statics: {
            methods: {
                Id: function (name) {
                    return "#" + (name || "");
                },
                Class: function (name) {
                    return "#" + (name || "");
                },
                Tag: function (name) {
                    return name;
                }
            }
        }
    });

    Bridge.define("localStorage");

    /** @namespace Model.Common */

    /**
     * Model này thường dùng để gọi hàm ajax get by Id
     *
     * @public
     * @class Model.Common.Identifier
     */
    Bridge.define("Model.Common.Identifier", {
        fields: {
            Id: 0
        }
    });

    Bridge.define("Model.View.StaffManagerModelView", {
        fields: {
            Email: null,
            Name: null,
            Position: null,
            Skype: null,
            ChiefName: null
        }
    });

    Bridge.define("Modules.StaffManager.Functions.Consts", {
        statics: {
            fields: {
                dialogActionEdit: null,
                dialogActionAdd: null
            },
            ctors: {
                init: function () {
                    this.dialogActionEdit = "Cập nhật";
                    this.dialogActionAdd = "Thêm";
                }
            }
        }
    });

    Bridge.define("support", {
        statics: {
            methods: {
                clearInnerHtml: function (element) {

                    element.innerHTML = "";
                },
                plusText: function (element, text) {
                    var $t;
                    if (!element.isConnected) {
                        alert("Không thể thực hiện hành động này");
                    }

                    var textSpan = ($t = document.createElement("span"), $t.innerText = text, $t);

                    element.insertAdjacentElement("afterend", textSpan);
                }
            }
        }
    });

    Bridge.define("WebExample.User", {
        fields: {
            Id: 0,
            Name: null
        }
    });

    Bridge.define("Ajax.Admin.GetStaffById", {
        inherits: [Kernel.Ajax],
        ctors: {
            ctor: function () {
                this.$initialize();
                Kernel.Ajax.ctor.call(this);
                this.Url = "/Admin/GetStaffById";
                this.Method = "GET";
            }
        }
    });

    Bridge.define("Ajax.Admin.SetKeywordForSearch", {
        inherits: [Kernel.Ajax],
        ctors: {
            ctor: function () {
                this.$initialize();
                Kernel.Ajax.ctor.call(this);
                this.Url = "/Admin/SetKeywordForSearch";
                this.Method = "GET";
            }
        }
    });

    Bridge.define("Kernel.AjaxTask", {
        inherits: [Kernel.Ajax],
        fields: {
            requestError: false,
            /**
             * Thời gian chờ dữ liệu tối đa, tính bằng mili giây
             *
             * @instance
             * @public
             * @memberof Kernel.AjaxTask
             * @function TimeCanWait
             * @type number
             */
            TimeCanWait: 0,
            AjaxResult: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Kernel.Ajax.ctor.call(this);
                this.Async = true;
                this.success = Bridge.fn.cacheBind(this, this._sucessTask);
                this.error = Bridge.fn.cacheBind(this, this._errorTask);
            }
        },
        methods: {
            Execute: function () {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $tcs = new System.Threading.Tasks.TaskCompletionSource(), 
                    $returnValue, 
                    Ajax, 
                    $async_e, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([0,1], $step);
                                switch ($step) {
                                    case 0: {
                                        this.PrepareAjaxOptions();
                                        Ajax = System.Threading.Tasks.Task.fromPromise(jQuery.ajax({ data: this.data, async: this.Async, method: this.Method, url: this.Url, success: Bridge.fn.cacheBind(this, this._sucessTask), error: Bridge.fn.cacheBind(this, this._errorTask) }));

                                        $task1 = System.Threading.Tasks.Task.whenAll(Ajax);
                                        $step = 1;
                                        $task1.continueWith($asyncBody);
                                        return;
                                    }
                                    case 1: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        $tcs.setResult(this.AjaxResult);
                                        return;
                                    }
                                    default: {
                                        $tcs.setResult(null);
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            $tcs.setException($async_e);
                        }
                    }, arguments);

                $asyncBody();
                return $tcs.task;
            },
            _errorTask: function (jqXHR, textStatus, errorThrown) {
                this.requestError = true;
            },
            _sucessTask: function (data, textStatus, jqXHR) {
                this.requestError = false;
                this.AjaxResult = data;
            }
        }
    });

    /**
     * Dialog có thể sử dụng data
     *
     * @public
     * @class Kernel.Browser.Dialog
     * @augments Kernel.Browser.Data
     */
    Bridge.define("Kernel.Browser.Dialog", {
        inherits: [Kernel.Browser.Data],
        fields: {
            /**
             * DialogId trên trình duyệt
             *
             * @instance
             * @public
             * @memberof Kernel.Browser.Dialog
             * @type string
             */
            dialogId: null,
            /**
             * Tiêu đề của dialog
             *
             * @instance
             * @public
             * @memberof Kernel.Browser.Dialog
             * @type string
             */
            Title: null
        },
        ctors: {
            /**
             * @instance
             * @public
             * @this Kernel.Browser.Dialog
             * @memberof Kernel.Browser.Dialog
             * @param   {string}    _dialogId    Cho phép hiển thị dialog khi khi _dialogId khác rỗng
             * @return  {void}
             */
            ctor: function (_dialogId) {
                if (_dialogId === void 0) { _dialogId = ""; }

                this.$initialize();
                Kernel.Browser.Data.ctor.call(this);
                if (!System.String.isNullOrWhiteSpace(_dialogId)) {
                    this.dialogId = _dialogId;
                    this.CreateModalDialog(_dialogId);
                }
            }
        },
        methods: {
            /**
             * Hiển thị dialog
             *
             * @instance
             * @public
             * @this Kernel.Browser.Dialog
             * @memberof Kernel.Browser.Dialog
             * @param   {string}    CreateddialogId
             * @return  {void}
             */
            CreateModalDialog: function (CreateddialogId) {
                if (CreateddialogId === void 0) { CreateddialogId = ""; }
                if (!System.String.isNullOrWhiteSpace(CreateddialogId)) {
                    this.select(Kernel.SelectorExtensions.Id(CreateddialogId)).modal("show");
                } else {
                    this.FillDialogData();
                    this.select(Kernel.SelectorExtensions.Id(this.dialogId)).modal("show");
                }
            },
            /**
             * Ẩn dialog
             *
             * @instance
             * @public
             * @this Kernel.Browser.Dialog
             * @memberof Kernel.Browser.Dialog
             * @param   {string}    dialogId
             * @return  {void}
             */
            HideModalDialog: function (dialogId) {
                if (dialogId === void 0) { dialogId = ""; }
                if (System.String.isNullOrWhiteSpace(dialogId)) {
                    this.select(Kernel.SelectorExtensions.Id(this.dialogId)).modal("hide");
                } else {
                    this.select(Kernel.SelectorExtensions.Id(dialogId)).modal("hide");
                }
            },
            /**
             * Điền giá trị cho các field trong dialog
             *
             * @instance
             * @public
             * @this Kernel.Browser.Dialog
             * @memberof Kernel.Browser.Dialog
             * @return  {void}
             */
            FillDialogData: function () { },
            GetChildId: function (Name) {

                return System.String.format("{0}_{1}", this.dialogId, Name);
            },
            /**
             * Trả về đối tượng $("#dialogId_Name")
             *
             * @instance
             * @public
             * @this Kernel.Browser.Dialog
             * @memberof Kernel.Browser.Dialog
             * @param   {string}    Name    Id của control trong dialog
             * @return  {object}
             */
            GetChild: function (Name) {
                return this.select(Kernel.SelectorExtensions.Id(this.GetChildId(Name)));
            },
            SetTitle: function (Title) {
                this.GetChild("DialogTitle").html(Title);
            }
        }
    });

    Bridge.define("Kernel.KendoDatePickerEventHandler", {
        inherits: [Kernel.KendoDatePicker],
        ctors: {
            ctor: function (Id) {
                this.$initialize();
                Kernel.KendoDatePicker.ctor.call(this, Id);
                var object = document.getElementById(this._kendoDatePickerId);
                object.onchange = Bridge.fn.combine(object.onchange, Bridge.fn.cacheBind(this, this.onChange));
                object.onclick = Bridge.fn.combine(object.onclick, Bridge.fn.cacheBind(this, this.onClick));
                object.onmouseenter = Bridge.fn.combine(object.onmouseenter, Bridge.fn.cacheBind(this, this.onHover));
            }
        },
        methods: {
            onChange: function (obj) {

            },
            onClick: function (obj) {


            },
            onHover: function (obj) {


            }
        }
    });

    Bridge.define("Kernel.Function", {
        inherits: [Kernel.Others.IVoid],
        fields: {
            data: null
        },
        alias: ["Execute", "Kernel$Others$IVoid$Execute"],
        ctors: {
            ctor: function () {
                this.$initialize();
                this.data = new Kernel.Browser.Data();
            }
        },
        methods: {
            /**
             * Gọi hàm này để thực thi một function class
             *
             * @instance
             * @public
             * @this Kernel.Function
             * @memberof Kernel.Function
             * @return  {void}
             */
            Execute: function () { },
            /**
             * Khởi tạo các biến
             *
             * @instance
             * @public
             * @this Kernel.Function
             * @memberof Kernel.Function
             * @return  {void}
             */
            VariablesInit: function () { }
        }
    });

    Bridge.define("Modules.StaffManager.StaffManager_class", {
        inherits: [Kernel.Class],
        fields: {
            SetSearchKeyword_func: null,
            AddEventHandler_func: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Kernel.Class.ctor.call(this);
                this.SetSearchKeyword_func = new Modules.StaffManager.Functions.SetSearchKeyword();
                this.AddEventHandler_func = new Modules.StaffManager.Functions.AddEventHandler();
            }
        }
    });

    Bridge.define("Kernel.DatePicker", {
        inherits: [Kernel.KendoDatePickerEventHandler],
        ctors: {
            ctor: function () {
                this.$initialize();
                Kernel.KendoDatePickerEventHandler.ctor.call(this, "datepicker");

            }
        },
        methods: {
            onChange: function (obj) {
                this.this.SetToday();

            },
            onClick: function (obj) {

            },
            onHover: function (obj) {

            }
        }
    });

    Bridge.define("Kernel.Dependecies.EnsureLibrariesInstalledCorrectly_func", {
        inherits: [Kernel.Function],
        fields: {
            dependencies: null
        },
        alias: ["Execute", "Kernel$Others$IVoid$Execute"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Kernel.Function.ctor.call(this);
                this.PrepareDependenciesList();
            }
        },
        methods: {
            PrepareDependenciesList: function () {
                this.dependencies = function (_o1) {
                        _o1.add("jquery.jQuery");
                        return _o1;
                    }(new (System.Collections.Generic.List$1(System.String)).ctor());
            },
            Success: function (lib) {
                System.Console.WriteLine(System.String.format("- <p style='color:green;'> {0} đã ok </p>", [lib]));
            },
            Error: function (lib) {
                System.Console.WriteLine(System.String.format(" <p style='color:red;'>Chưa thêm thư viện {0} vào dự án</p>", [lib]));
            },
            CheckifLibraryInstalled: function (lib) {
                try {
                    debugger;
                    var x = Bridge.unbox(lib);
                    var k = x.isPrototypeOf(undefined);
                    return Bridge.fn.cacheBind(this, this.Success);
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    return Bridge.fn.cacheBind(this, this.Error);
                }
            },
            Execute: function () {
                var $t;
                $t = Bridge.getEnumerator(this.dependencies);
                try {
                    while ($t.moveNext()) {
                        var lib = $t.Current;
                        System.Console.Write(System.String.format("Kiểm tra thư viện {0} tồn tại?", [lib]));
                        this.CheckifLibraryInstalled(lib)(lib);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }}
        }
    });

    /** @namespace Modules.StaffManager */

    /**
     * Lớp EditStaffDialog
     *
     * @public
     * @class Modules.StaffManager.EditStaffDialog_class
     * @augments Kernel.Browser.Dialog
     */
    Bridge.define("Modules.StaffManager.EditStaffDialog_class", {
        inherits: [Kernel.Browser.Dialog],
        fields: {
            model: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                Kernel.Browser.Dialog.ctor.call(this);
                this.dialogId = "editOrCreateStaff";
            }
        },
        methods: {
            CreateModalDialog: function (CreateddialogId) {
                if (CreateddialogId === void 0) { CreateddialogId = ""; }
                if (this.model == null) {
                    alert("Chưa điền thông tin vào model");
                }

                Kernel.Browser.Dialog.prototype.CreateModalDialog.call(this, CreateddialogId);
            },
            FillDialogData: function () {
                this.setValue(Kernel.SelectorExtensions.Id(this.GetChildId("name")), this.model.Name);
                this.setValue(Kernel.SelectorExtensions.Id(this.GetChildId("position")), this.model.Position);
                this.setValue(Kernel.SelectorExtensions.Id(this.GetChildId("email")), this.model.Email);
            },
            SetAction: function (Action) {
                this.GetChild("dialogAction").html(Action);
            },
            AddEventHandler: function () {
                this.GetChild("dialogAction").on("click", Bridge.unbox(this["dialogAction_onClick"]));
            },
            dialogAction_onClick: function () {
                alert("work");
            }
        }
    });

    Bridge.define("Modules.StaffManager.Functions.AddEventHandler", {
        inherits: [Kernel.Function],
        fields: {
            _data: null,
            ajax: null,
            btnSearch: null
        },
        alias: ["Execute", "Kernel$Others$IVoid$Execute"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Kernel.Function.ctor.call(this);
                this._data = new Kernel.Browser.Data();
            }
        },
        methods: {
            Execute: function () {
                this.VariablesInit();

                this.SetEventHandler();
            },
            VariablesInit: function () {
                this.btnSearch = this._data.getElementById(HTMLButtonElement, "btnSearch");
            },
            SetEventHandler: function () {
                this.btnSearch.onclick = Bridge.fn.combine(this.btnSearch.onclick, Bridge.fn.cacheBind(this, this.btnSearchOnClick));
            },
            btnSearchOnClick: function (ev) {
                System.Console.Write("Sự kiện btnSearch Click");
                new Modules.StaffManager.Functions.SetSearchKeyword().Execute();
            }
        }
    });

    /** @namespace Modules.StaffManager.Functions */

    /**
     * Gán session keyword để phục vụ cho tìm kiếm
     *
     * @public
     * @class Modules.StaffManager.Functions.SetSearchKeyword
     * @augments Kernel.Function
     */
    Bridge.define("Modules.StaffManager.Functions.SetSearchKeyword", {
        inherits: [Kernel.Function],
        fields: {
            ajax: null,
            keyword: null
        },
        alias: ["Execute", "Kernel$Others$IVoid$Execute"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Kernel.Function.ctor.call(this);

            }
        },
        methods: {
            VariablesInit: function () {
                this.keyword = this.data.getValueById(System.String, "Email");
            },
            Execute: function () {
                this.VariablesInit();
                this.ajaxRequest();
            },
            /**
             * @instance
             * @public
             * @this Modules.StaffManager.Functions.SetSearchKeyword
             * @memberof Modules.StaffManager.Functions.SetSearchKeyword
             * @return  {void}
             */
            ajaxRequest: function () {
                var $t;
                this.ajax = ($t = new Ajax.Admin.SetKeywordForSearch(), $t.Async = true, $t.data = { keyword: this.keyword }, $t);

                this.ajax.success = Bridge.fn.cacheBind(this, this.setSearchKeyword_ok);
                this.ajax.error = Bridge.fn.cacheBind(this, this.setSearchKeyword_error);
                this.ajax.Request();
            },
            /**
             * Lỗi xảy ra khi gán session keyword
             *
             * @instance
             * @private
             * @this Modules.StaffManager.Functions.SetSearchKeyword
             * @memberof Modules.StaffManager.Functions.SetSearchKeyword
             * @param   {Retyped..JQuery.jqXHR$1}    jqXHR          
             * @param   {System.String}              textStatus     
             * @param   {string}                     errorThrown
             * @return  {void}
             */
            setSearchKeyword_error: function (jqXHR, textStatus, errorThrown) {
                alert("Bị lỗi rồi");
            },
            /**
             * Nạp lại grid danh sách nhân viên mỗi khi đã gán session keyword thành công
             *
             * @instance
             * @private
             * @this Modules.StaffManager.Functions.SetSearchKeyword
             * @memberof Modules.StaffManager.Functions.SetSearchKeyword
             * @param   {System.Object}              data          
             * @param   {System.String}              textStatus    
             * @param   {Retyped..JQuery.jqXHR$1}    jqXHR
             * @return  {void}
             */
            setSearchKeyword_ok: function (data, textStatus, jqXHR) {

                var KendoGrid = this.data.getKendoGrid("grid");

                this.data.kendGridReloadData(KendoGrid);
            }
        }
    });

    /**
     * Lấy thông tin nhân viên dựa vào Id
      Gán vào dialog để hiển thị
     *
     * @public
     * @class Modules.StaffManager.Functions.ShowDialogEditStaffById
     * @augments Kernel.Function
     */
    Bridge.define("Modules.StaffManager.Functions.ShowDialogEditStaffById", {
        inherits: [Kernel.Function],
        fields: {
            ajax: null,
            Id: 0
        },
        alias: ["Execute", "Kernel$Others$IVoid$Execute"],
        ctors: {
            ctor: function (Id) {
                this.$initialize();
                Kernel.Function.ctor.call(this);
                this.Id = Id;
            }
        },
        methods: {
            Execute: function () {
                this.ajaxRequest();
            },
            ajaxRequest: function () {
                var $t, $t1;
                this.ajax = ($t = new Ajax.Admin.GetStaffById(), $t.Async = true, $t.data = ($t1 = new Model.Common.Identifier(), $t1.Id = this.Id, $t1), $t);

                this.ajax.success = Bridge.fn.cacheBind(this, this.data_ok);
                this.ajax.error = Bridge.fn.cacheBind(this, this.data_eror);
                this.ajax.Request();
            },
            data_eror: function (jqXHR, textStatus, errorThrown) {

            },
            data_ok: function (data, textStatus, jqXHR) {
                var model = Bridge.unbox(data);
                var editDialog = new Modules.StaffManager.EditStaffDialog_class();
                editDialog.model = model;
                editDialog.SetTitle("Cập nhật thông tin nhân viên");
                editDialog.SetAction(Modules.StaffManager.Functions.Consts.dialogActionEdit);
                editDialog.CreateModalDialog();
            }
        }
    });

    Bridge.define("Modules.StaffManager.Startup", {
        inherits: [Kernel.Function],
        alias: ["Execute", "Kernel$Others$IVoid$Execute"],
        ctors: {
            ctor: function () {
                this.$initialize();
                Kernel.Function.ctor.call(this);

            }
        },
        methods: {
            Execute: function () {
                try {
                    var StaffManager_class = new Modules.StaffManager.StaffManager_class();
                    StaffManager_class.AddEventHandler_func.Execute();
                    System.Console.WriteLine("Module StaffManger đã khởi động");
                }
                catch ($e1) {
                    $e1 = System.Exception.create($e1);
                    System.Console.Write("Lỗi xảy ra khi khởi động StaffManager");
                }

            }
        }
    });

    Bridge.define("Kernel.Dependecies.DI", {
        inherits: [Kernel.Dependecies.EnsureLibrariesInstalledCorrectly_func],
        methods: {
            PrepareDependenciesList: function () {
                Kernel.Dependecies.EnsureLibrariesInstalledCorrectly_func.prototype.PrepareDependenciesList.call(this);
                this.dependencies.add("TestLib2");
            },
            Error: function (lib) {
                System.Console.WriteLine((System.String.format("Kiểu thông báo lỗi thứ 2 : Lỗi ", null) || "") + (lib || ""));
            },
            Success: function (lib) {
                System.Console.WriteLine(System.String.format("Ờ chạy được rồi nhé : {0}", [lib]));
            }
        }
    });
});



//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJlU01TLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyJLZXJuZWwvQWpheC9BamF4LmNzIiwiQXBwLmNzIiwiS2VybmVsL0F0dHJpYnV0ZXMvVGVzdGVkQXR0cmlidXRlLmNzIiwiS2VybmVsL0Jyb3dzZXIvRGF0YS5jcyIsIktlcm5lbC9LZW5kb0RhdGVQaWNrZXIvQ29yZS9LZW5kb0RhdGVQaWNrZXIuY3MiLCJLZXJuZWwvRXh0ZW5zaW9ucy9TZWxlY3RvckV4dGVuc2lvbnMuY3MiLCJLZXJuZWwvRXh0ZW5zaW9ucy9IdG1sU3VwcG9ydEV4dGVuc2lvbnMuY3MiLCJBamF4L0FkbWluL1N0YWZmTWFuYWdlci9HZXRTdGFmZkJ5SWQuY3MiLCJBamF4L0FkbWluL1N0YWZmTWFuYWdlci9TZXRLZXl3b3JkRm9yU2VhcmNoLmNzIiwiS2VybmVsL0FqYXgvQWpheFRhc2suY3MiLCJLZXJuZWwvQnJvd3Nlci9EaWFsb2cuY3MiLCJLZXJuZWwvS2VuZG9EYXRlUGlja2VyL0NvcmUvS2VuZG9EYXRlUGlja2VyRXZlbnRIYW5kbGVyLmNzIiwiS2VybmVsL090aGVycy9GdW5jdGlvbi5jcyIsIk1vZHVsZXMvU3RhZmZNYW5hZ2VyL0NsYXNzZXMvU3RhZmZNYW5hZ2VyX2NsYXNzLmNzIiwiS2VybmVsL0tlbmRvRGF0ZVBpY2tlci9kYXRlUGlja2VyLmNzIiwiS2VybmVsL0RlcGVuZGVjaWVzL0Vuc3VyZUxpYnJhcmllc0luc3RhbGxlZENvcnJlY3RseV9mdW5jLmNzIiwiTW9kdWxlcy9TdGFmZk1hbmFnZXIvQ2xhc3Nlcy9FZGl0U3RhZmZEaWFsb2dfY2xhc3MuY3MiLCJNb2R1bGVzL1N0YWZmTWFuYWdlci9GdW5jdGlvbnMvQWRkRXZlbnRIYW5kbGVyLmNzIiwiTW9kdWxlcy9TdGFmZk1hbmFnZXIvRnVuY3Rpb25zL1NldFNlYXJjaEtleXdvcmQuY3MiLCJNb2R1bGVzL1N0YWZmTWFuYWdlci9GdW5jdGlvbnMvU2hvd0RpYWxvZ0VkaXRTdGFmZkJ5SWQuY3MiLCJNb2R1bGVzL1N0YWZmTWFuYWdlci9TdGFydHVwLmNzIiwiS2VybmVsL0RlcGVuZGVjaWVzL0RJLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXdEWUE7Ozs7Ozs7Ozs7Ozs7O2dCQVFBQTtnQkFDQUEsY0FBU0E7Ozs7Ozs7Ozs7OztnQkFTVEE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsSUFBSUE7b0JBQ0FBLGVBQVVBLFlBQW1CQSxRQUVsQkEsa0JBQ0NBLG9CQUNDQSxrQkFDSEEsbUJBQ0lBLHFCQUNGQTs7OztnQkFPaEJBLHVCQUFrQkEsQ0FBQ0EsaUNBQTBCQTs7Z0JBRTdDQSxJQUFJQSxDQUFDQTtvQkFDREE7Ozs7Z0JBTUpBO2dCQUNBQSx3QkFBd0JBLE9BRXBCQSxnQkFDQUEsbUJBQ0FBLG9CQUNBQTtnQkFFSkE7Z0JBQ0FBLHlCQUFrQkE7OztnQkFJbEJBOzs7O2dCQU1BQTtnQkFFQUEsSUFBSUEsYUFBUUE7b0JBRVJBLFlBQU9BOztnQkFFdkJBO29CQUVJQSxNQUE4Q0E7b0JBQzlDQSxJQUFJQTt3QkFJQUEsMENBQU9BO3dCQUNQQSxZQUFPQTt3QkFLUEE7OztvQkFHSkEsSUFBSUE7d0JBRUFBLElBQUlBLG9DQUFVQTs0QkFJVkEsWUFBT0EsYUFBb0JBOzRCQUMzQkE7Ozs7b0JBSVJBLElBQUlBO3dCQUVBQSxJQUFJQSxvQ0FBVUE7NEJBR1ZBOzs7Ozt3QkFPSkEsWUFBT0EsYUFBb0JBO3dCQUMzQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDOUlJQSwrQ0FBbURBOztnREFHUkE7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQUczQ0EsVUFBY0EsVUFBSUEsK0VBR0xBLGlCQUNGQTt3Q0FFWEEsU0FBc0JBOzs7Ozs7O2dEQUFOQTt3Q0FDaEJBLElBQUlBLENBQUNBOzRDQUNEQSxzSEFBc0RBLENBQUNBLFFBQVFBOzs7d0NBR25FQSxXQUFlQSxVQUFJQSxnRkFHTkEsa0JBQ0ZBO3dDQUVYQSxTQUFzQkE7Ozs7Ozs7Z0RBQU5BOzt3Q0FFaEJBLElBQUlBLENBQUNBOzRDQUNEQSxzSEFBc0RBLENBQUNBLFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQ3hDbERBOzs7OztnQkFFbkJBLElBQUlBLENBQUNBLGlDQUEwQkE7b0JBQzNCQSx5QkFBa0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NDV0pBLEdBQUdBO2dCQUVyQkEsT0FBT0EsT0FBcUJBOzs7Ozs7Ozs7Ozs7O3NDQVdSQSxHQUFHQTtnQkFFdkJBLE9BQU9BLG1CQUFxQkEsc0RBQWlDQTs7Z0NBSTVDQSxZQUFtQkE7Z0JBRXBDQSxPQUFxQkEsZ0JBQWdCQTs7Ozs7Ozs7Ozs7O29DQVViQTtnQkFFeEJBLE9BQU9BLE9BQXFCQTs7Ozs7Ozs7Ozs7OzBDQVVEQTtnQkFFM0JBOzs7Ozs7Ozs7Ozs7OEJBV2tCQTtnQkFFbEJBLE9BQU9BLE9BQXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNQaENBLE9BQU9BLElBQUlBLHVCQUFnQkE7Ozs7O29CQU0zQkEsT0FBT0Esd0JBQTRCQTs7Ozs7OzZCQTNEWkE7OEJBS0NBOzs0QkFNREE7O2dCQUVuQkEsMEJBQXFCQTtnQkFDckJBLGtCQUFhQSxZQUFPQTtnQkFDcEJBLFlBQU9BOzs7Ozs7Z0JBS1BBLE9BQU9BOzttQ0FHYUE7Z0JBRXBCQTtvQkFFSUEsZ0JBQW9CQSxvQkFBZUEscUJBQWdCQTtvQkFDbkRBLHNCQUFpQkE7Ozs7O29CQUtqQkEseUJBQWtCQSxvQ0FBMkJBOzs7Ozs7Ozs7Ozs7OztnQkFVakRBLGlCQUFpQkEsSUFBSUEsdUJBQWdCQTtnQkFDckNBLHVCQUF1QkE7Ozs7Ozs7Ozs7OztnQkF3QnZCQTtnQkFDQUE7Ozs7Ozs7Ozs7OztnQkFRQUEsWUFBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkN6RmFBO29CQUVwQkEsT0FBT0EsT0FBTUE7O2lDQUdVQTtvQkFFdkJBLE9BQU9BLE9BQU1BOzsrQkFFUUE7b0JBRXJCQSxPQUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENDWG1CQTs7b0JBRzlCQSxvQkFBb0JBOztvQ0FHSUEsU0FBOEJBOztvQkFFdERBLElBQUlBLENBQUNBO3dCQUNEQTs7O29CQUVKQSxlQUFlQSxxREFFQ0E7O29CQUdoQkEsOEJBQThCQSxZQUE2QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JDWHZEQTtnQkFDQUEsY0FBU0E7Ozs7Ozs7Ozs7O2dCQ05UQTtnQkFDQUEsY0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JDYVRBO2dCQUNBQSxlQUFVQTtnQkFDVkEsYUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBTVJBO3dDQUNBQSxPQUFXQSxvREFBbUJBLFFBRW5CQSxrQkFDQ0Esb0JBQ0NBLGtCQUNIQSxtQkFDSUEsb0RBQ0ZBOzt3Q0FJWkEsU0FBTUEsb0NBQXFCQTs7Ozs7Ozt3Q0FDM0JBLGVBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2FBLE9BQW1DQSxZQUErQ0E7Z0JBRXRHQTs7bUNBSXFCQSxNQUFhQSxZQUFpREE7Z0JBRW5GQTtnQkFDQUEsa0JBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQzFCSEE7Ozs7O2dCQUVWQSxJQUFJQSxDQUFDQSxpQ0FBMEJBO29CQUUzQkEsZ0JBQWdCQTtvQkFDaEJBLHVCQUFrQkE7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FTWUE7O2dCQUVsQ0EsSUFBSUEsQ0FBQ0EsaUNBQTBCQTtvQkFHM0JBLFlBQU9BOztvQkFLUEE7b0JBQ0FBLFlBQU9BOzs7Ozs7Ozs7Ozs7O3VDQVNxQkE7O2dCQUVoQ0EsSUFBSUEsaUNBQTBCQTtvQkFFMUJBLFlBQU9BOztvQkFJUEEsWUFBT0E7Ozs7Ozs7Ozs7Ozs7a0NBYWtCQTs7Z0JBRzdCQSxPQUFPQSxnQ0FBd0JBLGVBQWNBOzs7Ozs7Ozs7Ozs7Z0NBUWpCQTtnQkFFNUJBLE9BQU9BLFlBQU9BLDZDQUFXQTs7Z0NBR0FBO2dCQUV6QkEsa0NBQTZCQTs7Ozs7Ozs7NEJDN0ZFQTs7dURBQWtCQTtnQkFFakRBLGFBQWNBLHdCQUE0QkE7Z0JBQzFDQSxxREFBb0JBO2dCQUNwQkEsbURBQW1CQTtnQkFDbkJBLDZEQUF3QkE7Ozs7Z0NBR0NBOzs7K0JBS0RBOzs7OytCQU1BQTs7Ozs7Ozs7Ozs7Ozs7OztnQkNNeEJBLFlBQU9BLElBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQ3ZCWEEsNkJBQXdCQSxJQUFJQTtnQkFDNUJBLDRCQUF1QkEsSUFBSUE7Ozs7Ozs7Ozs7Ozs7OztnQ0NFREE7Z0JBRTFCQTs7OytCQUd5QkE7OzsrQkFJQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JDYnpCQTs7Ozs7Z0JBSUFBLG9CQUFlQSxBQUFpREEsVUFBQ0E7d0JBQU9BO3dCQUF5QkEsT0FBT0E7c0JBQTNEQSxLQUFJQTs7K0JBR3pCQTtnQkFFeEJBLHlCQUFrQkEsbUVBQTBEQTs7NkJBRXREQTtnQkFFdEJBLHlCQUFrQkEscUZBQTRFQTs7K0NBRTVDQTtnQkFFbERBO29CQUVJQTtvQkFDQUEsUUFBUUE7b0JBQ1JBLFFBQVFBLGdCQUFnQkE7b0JBQ3hCQSxPQUFPQSxBQUFtQkE7Ozs7b0JBSTFCQSxPQUFPQSxBQUFtQkE7Ozs7O2dCQUs5QkEsMEJBQW9CQTs7Ozt3QkFFaEJBLHFCQUFjQSx3REFBK0NBO3dCQUM3REEsNkJBQXdCQSxLQUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkMxQmpDQTs7Ozt5Q0FFbUNBOztnQkFFbkNBLElBQUlBLGNBQVNBO29CQUNUQTs7O2dCQUVKQSw2REFBdUJBOzs7Z0JBSXZCQSxjQUFTQSx1REFBeUJBO2dCQUNsQ0EsY0FBU0EsMkRBQTZCQTtnQkFDdENBLGNBQVNBLHdEQUEwQkE7O2lDQUdUQTtnQkFFMUJBLG1DQUE4QkE7OztnQkFLOUJBLDBDQUFxQ0E7OztnQkFJckNBOzs7Ozs7Ozs7Ozs7Ozs7OztnQkNsQkFBLGFBQVFBLElBQUlBOzs7OztnQkFJWkE7O2dCQUVBQTs7O2dCQU1BQSxpQkFBWUE7OztnQkFNWkEsbUVBQXFCQTs7d0NBS1lBO2dCQUVqQ0E7Z0JBQ0FBLElBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JDbEJKQSxlQUFVQTs7O2dCQUtWQTtnQkFDQUE7Ozs7Ozs7Ozs7O2dCQVVBQSxZQUFPQSxVQUFJQSw2REFHQUEsV0FFT0E7O2dCQUlsQkEsb0JBQWVBO2dCQUNmQSxrQkFBYUE7Z0JBQ2JBOzs7Ozs7Ozs7Ozs7Ozs4Q0FTZ0NBLE9BQW1DQSxZQUErQ0E7Z0JBRWxIQTs7Ozs7Ozs7Ozs7Ozs7MkNBVzZCQSxNQUFhQSxZQUFpREE7O2dCQU8zRkEsZ0JBQWdCQTs7Z0JBRWhCQSw2QkFBNkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJDdEVGQTs7O2dCQUUzQkEsVUFBVUE7Ozs7O2dCQUtQQTs7OztnQkFLSEEsWUFBT0EsVUFBSUEsc0RBR0FBLFdBQUlBLG9DQUVGQTs7Z0JBSWJBLG9CQUFlQTtnQkFDZkEsa0JBQWFBO2dCQUNiQTs7aUNBSW1CQSxPQUFtQ0EsWUFBK0NBOzs7K0JBS3BGQSxNQUFhQSxZQUFpREE7Z0JBRS9FQSxZQUFZQTtnQkFDWkEsaUJBQWlCQSxJQUFJQTtnQkFDckJBLG1CQUFtQkE7Z0JBQ25CQTtnQkFDQUEscUJBQXFCQTtnQkFDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztnQkM5Q0FBO29CQUVJQSx5QkFBeUJBLElBQUlBO29CQUM3QkE7b0JBQ0FBOzs7O29CQUlBQTs7Ozs7Ozs7Ozs7Z0JDYkpBO2dCQUNBQTs7NkJBRXVCQTtnQkFFdkJBLHlCQUFrQkEseUVBQWtEQTs7K0JBRTNDQTtnQkFFekJBLHlCQUFrQkEsbURBQTBDQSIsCiAgInNvdXJjZXNDb250ZW50IjogWyJ1c2luZyBSZXR5cGVkO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIEtlcm5lbC5IdHRwO1xyXG51c2luZyBLZXJuZWwuQnJvd3NlcjtcclxudXNpbmcgS2VybmVsLkF0dHJpYnV0ZXM7XHJcblxyXG5uYW1lc3BhY2UgS2VybmVsXHJcbntcclxuICAgIFtUZXN0ZWRdXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBBamF4XHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyAgSMOgbSBz4bq9IGfhu41pIGtoaSB0aOG7sWMgZ+G7jWkgYWpheCB0aMOgbmggY8O0bmdcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGpxdWVyeS5KUXVlcnkuQWpheC5TdWNjZXNzQ2FsbGJhY2s8b2JqZWN0PiBzdWNjZXNzIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgcHVibGljIGpxdWVyeS5KUXVlcnkuanFYSFI8b2JqZWN0PiByZXF1ZXN0O1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gIEjDoG0gc+G6vSBn4buNaSBraGkgdGjhu7FjIGfhu41pIGFqYXggdGjhuqV0IGLhuqFpXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBqcXVlcnkuSlF1ZXJ5LkFqYXguRXJyb3JDYWxsYmFjazxvYmplY3Q+IGVycm9yIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyAgcmVsYXRpdmUgb3IgYWJzb2x1dGUgdXJsXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBzdHJpbmcgVXJsIHsgZ2V0OyBzZXQ7IH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyAgYWpheCBkYXRhXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCBCcmlkZ2UuVW5pb248anF1ZXJ5LkpRdWVyeS5QbGFpbk9iamVjdDxvYmplY3Q+LCBzdHJpbmc+IGRhdGEgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vICBBc3luY2hyb25vdXNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGJvb2wgQXN5bmMgeyBnZXQ7IHNldDsgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vICBIdHRwIE1ldGhvZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIE1ldGhvZCB7IGdldDsgc2V0OyB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTuG6v3UgVmFsaWREYXRhVHlwZSBraMOhYyBudWxsIHRow6xcclxuICAgICAgICAvLy8gIDogS2nhu4NtIHRyYSBraeG7g3UgZOG7ryBsaeG7h3UgdHLGsOG7m2Mga2hpIGfhu61pIGFqYXguXHJcbiAgICAgICAgLy8vIE7hur91IG7DsyBi4bqxbmcgbnVsbCB0aMOsIGtow7RuZyBraeG7g20gdHJhLiBcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG5cclxuICAgICAgICBwcml2YXRlIGJvb2wgX2lzVmFsaWRSZXF1ZXN0ID0gdHJ1ZTtcclxuICAgICAgICBwdWJsaWMgQWpheCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBN4bq3YyDEkeG7i25oXHJcbiAgICAgICAgICAgIFNldERlZmF1bHRQYXJhbWV0ZXJzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vICBUaGnhur90IGzhuq1wIHRoYW0gc+G7kSBt4bq3YyDEkeG7i25oXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIFNldERlZmF1bHRQYXJhbWV0ZXJzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzeW5jID0gdHJ1ZTtcclxuICAgICAgICAgICAgTWV0aG9kID0gSHR0cE1ldGhvZC5HRVQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gIEfhu41pIGFqYXhcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBcclxuICAgICAgICBbVGVzdGVkXVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgUmVxdWVzdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBWYWxpZGF0ZVJlcXVlc3QoKTtcclxuICAgICAgICAgICAgUHJlcGFyZUFqYXhPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIEphdmFzY3JpcHQuZGVidWdnZXIoKTtcclxuICAgICAgICAgICAgaWYgKF9pc1ZhbGlkUmVxdWVzdClcclxuICAgICAgICAgICAgICAgIHJlcXVlc3QgPSBqcXVlcnkualF1ZXJ5LmFqYXgobmV3IGpxdWVyeS5KUXVlcnkuQWpheFNldHRpbmdzPG9iamVjdD5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBhc3luYyA9IEFzeW5jLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IE1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IHN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBlcnJvclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdGVkXVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgVmFsaWRhdGVSZXF1ZXN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIF9pc1ZhbGlkUmVxdWVzdCA9ICFzdHJpbmcuSXNOdWxsT3JXaGl0ZVNwYWNlKFVybCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIV9pc1ZhbGlkUmVxdWVzdClcclxuICAgICAgICAgICAgICAgIFNob3dNZXNzYWdlRm9yTm90VmFsaWRSZXF1ZXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdGVkXVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgU2hvd01lc3NhZ2VGb3JOb3RWYWxpZFJlcXVlc3QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZG9tLmFsZXJ0KFwiUmVxdWVzdCBraMO0bmcgaOG7o3AgbOG7h1wiKTtcclxuICAgICAgICAgICAgdmFyIGFqYXhSZXF1ZXN0UGFyYW1zID0gbmV3XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFVybCxcclxuICAgICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgICBNZXRob2QsXHJcbiAgICAgICAgICAgICAgICBBc3luY1xyXG4gICAgICAgICAgICB9LlRvRHluYW1pYygpO1xyXG4gICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShcIlJlcXVlc3Qga2jDtG5nIGjhu6NwIGzhu4cgOiBcIik7XHJcbiAgICAgICAgICAgIENvbnNvbGUuV3JpdGVMaW5lKGFqYXhSZXF1ZXN0UGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBTaG93Tm90U3VwcG9ydE1ldGhvZCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShcIkhp4buHbiB04bqhaSB0aMawIHZp4buHbiBjaMawYSBo4buXIHRy4bujIHBoxrDGoW5nIHRo4bupYyBuw6B5XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RlZF1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIFByZXBhcmVBamF4T3B0aW9ucygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBKYXZhc2NyaXB0LmRlYnVnZ2VyKCk7XHJcbiAgICAgICAgICAgIC8vIFJlcXVlc3Qga2jDtG5nIGPDsyBkYXRhXHJcbiAgICAgICAgICAgIGlmIChkYXRhID09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBuZXcgeyB9LkFzPGR5bmFtaWM+KCk7IC8vIG9iamVjdCBqc29uIHN0cmluZ1xyXG4gICAgICAgICAgICB9XHJcbmRvXHJcbntcclxuICAgIGdsb2JhbDo6QnJpZGdlLlNjcmlwdC5Ub1RlbXAoXCJjYXNlX3BhdHRlcm4wXCIsIGRhdGEuR2V0VHlwZSgpLk5hbWUpO1xyXG4gICAgaWYgKGdsb2JhbDo6QnJpZGdlLlNjcmlwdC5Gcm9tVGVtcDxzdHJpbmc+KFwiY2FzZV9wYXR0ZXJuMFwiKSA9PSBcIlN0cmluZ1wiKVxyXG4gICAge1xyXG4gICAgICAgIC8vIMSRw6MgdGVzdFxyXG4gICAgICAgIC8vIHRydXnhu4FuIHRy4buxYyB0aeG6v3AgZGF0YSB2w6BvIHVybFxyXG4gICAgICAgIFVybCArPSBkYXRhO1xyXG4gICAgICAgIGRhdGEgPSBuZXdcclxuICAgICAgICB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuVG9EeW5hbWljKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdsb2JhbDo6QnJpZGdlLlNjcmlwdC5Gcm9tVGVtcDxzdHJpbmc+KFwiY2FzZV9wYXR0ZXJuMFwiKSA9PSBcIk9iamVjdFwiKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChNZXRob2QgPT0gSHR0cE1ldGhvZC5HRVQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyDEkcOjIHRlc3RcclxuICAgICAgICAgICAgLy8gY2jDrW5oIGzDoCBqc29uXHJcbiAgICAgICAgICAgIGRhdGEgPSBqcXVlcnkualF1ZXJ5LnBhcmFtKGRhdGEuQXM8ZHluYW1pYz4oKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2xvYmFsOjpCcmlkZ2UuU2NyaXB0LkZyb21UZW1wPHN0cmluZz4oXCJjYXNlX3BhdHRlcm4wXCIpID09IFwiT2JqZWN0XCIpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKE1ldGhvZCA9PSBIdHRwTWV0aG9kLlBPU1QpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBraGkgcG9zdCB0aMOsIGThu68gbGnhu4d1IGtp4buDdSBqc29uXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB7XHJcbiAgICAgICAgLy8gxJHDoyB0ZXN0XHJcbiAgICAgICAgLy8gS2nhu4N1IGThu68gbGnhu4d1IG1vZGVsXHJcbiAgICAgICAgZGF0YSA9IGpxdWVyeS5qUXVlcnkucGFyYW0oZGF0YS5BczxkeW5hbWljPigpLnRvSlNPTigpKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxufVxyXG53aGlsZSAoZmFsc2UpOyAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgS2VybmVsLkRlcGVuZGVjaWVzO1xyXG51c2luZyBLZXJuZWw7XHJcbnVzaW5nIFJldHlwZWQ7XHJcbnVzaW5nIE1vZHVsZXM7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIEJyaWRnZS5IdG1sNTtcclxudXNpbmcgQnJpZGdlO1xyXG51c2luZyBLZXJuZWwuSHR0cDtcclxudXNpbmcgQnJpZGdlLmpRdWVyeTI7XHJcblxyXG5uYW1lc3BhY2UgRXNtc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQXBwXHJcbiAgICB7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gIFNldCBNYWluIE1ldGhvZCB0byBiZSBhdXRvbWF0aWNhbGx5IGNhbGxlZCB3aGVuIGFsbCB0aGUgSmF2YVNjcmlwdCBoYXMgYmVlbiBsb2FkZWQgYW5kIFxyXG4gICAgICAgIC8vLyAgdGhlIFBhZ2UgaXMgcmVhZHkuIElmIGpRdWVyeSBoYXMgYmVlbiBpbmNsdWRlZCBpbiB0aGUgUGFnZSwgXHJcbiAgICAgICAgLy8vICB0aGUgalF1ZXJ5IHJlYWR5IGhhbmRsZXIgaXMgY2FsbGVkLCBvdGhlcndpc2UgRE9NQ29udGVudExvYWRlZCBpcyB1c2VkLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgW1JlYWR5XVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBNYWluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRvbS5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldGJ0blwiKS5vbmNsaWNrID0gVGFyZ2V0YnRuX2NsaWNrQXN5bmM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBhc3luYyB2b2lkIFRhcmdldGJ0bl9jbGlja0FzeW5jKGRvbS5Nb3VzZUV2ZW50IGV2KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gYWpheCB0aOG7qSBuaOG6pXRcclxuICAgICAgICAgICAgdmFyIEdldFRlc3QgPSBuZXcgQWpheFRhc2tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjUyMDg0L2hvbWUvVGVzdEdldFwiLFxyXG4gICAgICAgICAgICAgICAgTWV0aG9kID0gSHR0cE1ldGhvZC5HRVQsXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gbmV3IHsgfS5Ub0R5bmFtaWMoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkeW5hbWljIFRlc3QxID0gYXdhaXQgR2V0VGVzdC5FeGVjdXRlKCk7XHJcbiAgICAgICAgICAgIGlmICghR2V0VGVzdC5yZXF1ZXN0RXJyb3IpXHJcbiAgICAgICAgICAgICAgICBkb20uZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXRidG5cIikuaW5uZXJIVE1MICs9IChcImdldFwiICsgVGVzdDEuaWQpO1xyXG5cclxuICAgICAgICAgICAgLy8gYWpheCB0aOG7qSAyXHJcbiAgICAgICAgICAgIHZhciBQb3N0VGVzdCA9IG5ldyBBamF4VGFza1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTIwODQvaG9tZS9UZXN0UG9zdFwiLFxyXG4gICAgICAgICAgICAgICAgTWV0aG9kID0gSHR0cE1ldGhvZC5QT1NULFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IG5ldyB7IH0uVG9EeW5hbWljKClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZHluYW1pYyBUZXN0MiA9IGF3YWl0IFBvc3RUZXN0LkV4ZWN1dGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUG9zdFRlc3QucmVxdWVzdEVycm9yKVxyXG4gICAgICAgICAgICAgICAgZG9tLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0YnRuXCIpLmlubmVySFRNTCArPSAoXCJwb3N0IFwiICsgVGVzdDIuaWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgS2VybmVsLkF0dHJpYnV0ZXNcclxue1xyXG4gICAgcHVibGljIGNsYXNzIFRlc3RlZEF0dHJpYnV0ZSA6IFN5c3RlbS5BdHRyaWJ1dGVcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgVGVzdGVkQXR0cmlidXRlKHN0cmluZyBtc2c9XCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghc3RyaW5nLklzTnVsbE9yV2hpdGVTcGFjZShtc2cpKVxyXG4gICAgICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUobXNnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgUmV0eXBlZDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBLZXJuZWwuSHR0cDtcclxudXNpbmcgS2VybmVsLkF0dHJpYnV0ZXM7XHJcblxyXG5uYW1lc3BhY2UgS2VybmVsLkJyb3dzZXJcclxue1xyXG4gICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgLy8vICBYxrDMiSBsecyBIGTGsMyDIGxpw6rMo3UgdHLDqm4gdHJpzIBuaCBkdXnDqsyjdFxyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjbGFzcyBEYXRhXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyAgTMOizIF5IGdpYcyBIHRyacyjIGN1zIlhIGVsZW1lbnRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vLyA8dHlwZXBhcmFtIG5hbWU9XCJUXCI+IEtpw6rMiXUgxJHDtMyBaSB0xrDGocyjbmcgdHJvbmcgbMahzIFwIFJldHlwZWQuZG9tIDwvdHlwZXBhcmFtPlxyXG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImluZGVudGlmZXJcIj4gSWQgPC9wYXJhbT5cclxuICAgICAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxyXG4gICAgICAgIC8vLyBcclxuICAgICAgICBbVGVzdGVkXVxyXG4gICAgICAgIHB1YmxpYyBUIGdldFZhbHVlQnlJZDxUPihzdHJpbmcgaW5kZW50aWZlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBqcXVlcnkualF1ZXJ5LnNlbGVjdChpbmRlbnRpZmVyLklkKCkpLnZhbCgpLkFzPFQ+KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vICBIYcyAbSBkb2N1bWVudC5nZXRFbGVtZW50YnlJZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgLy8vIDx0eXBlcGFyYW0gbmFtZT1cIlRcIj4gS2nDqsyJdSDEkcO0zIFpIHTGsMahzKNuZyB0cm9uZyBsxqHMgXAgUmV0eXBlZC5kb20gPC90eXBlcGFyYW0+XHJcbiAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwiaW5kZW50aWZlclwiPiBJZCA8L3BhcmFtPlxyXG4gICAgICAgIC8vLyA8cmV0dXJucz48L3JldHVybnM+XHJcbiAgICAgICAgLy8vIFxyXG4gICAgICAgIFtUZXN0ZWRdXHJcbiAgICAgICAgcHVibGljIFQgZ2V0RWxlbWVudEJ5SWQ8VD4oc3RyaW5nIGluZGVudGlmZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4ganF1ZXJ5LmpRdWVyeS5zZWxlY3QoaW5kZW50aWZlci5JZCgpKS5maXJzdCgpWzBdLkNhc3Q8VD4oKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgdm9pZCBzZXRWYWx1ZShzdHJpbmcgaW5kZW50aWZlciwgc3RyaW5nIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAganF1ZXJ5LmpRdWVyeS5zZWxlY3QoaW5kZW50aWZlcikudmFsKHZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gIEzDosyBeSBrZW5kbyBncmlkIMSRw6rMiSB4xrDMiSBsecyBXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT4gZG9tLmFsZXJ0KFwixJBhzIMgY2hhzKN5XCIpO1xyXG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImluZGVudGlmZXJcIj4gSWQgPC9wYXJhbT5cclxuICAgICAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxyXG4gICAgICAgIC8vLyBcclxuICAgICAgICBbVGVzdGVkXVxyXG4gICAgICAgIHB1YmxpYyBkeW5hbWljIGdldEtlbmRvR3JpZChzdHJpbmcgaW5kZW50aWZlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBqcXVlcnkualF1ZXJ5LnNlbGVjdChpbmRlbnRpZmVyLklkKCkpLmRhdGEoXCJrZW5kb0dyaWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vICAgUmVmcmVzaCBsYcyjaSBkxrDMgyBsacOqzKN1IGNobyBrZW5kb2dyaWRcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImdyaWRcIj4gZ3JpZCDEkcawxqHMo2MgbMOizIF5IHTGsMyAIGhhzIBtIGdldEtlbmRvR3JpZDwvcGFyYW0+XHJcbiAgICAgICAgLy8vIFxyXG5cclxuICAgICAgICBbVGVzdGVkXVxyXG4gICAgICAgIHB1YmxpYyB2b2lkIGtlbmRHcmlkUmVsb2FkRGF0YShkeW5hbWljIGdyaWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBncmlkLmRhdGFTb3VyY2UucmVhZCgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gIEpxdWVyeSBzZWxlY3RvclxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwianF1ZXJ5U2VsZWN0b3JcIj48L3BhcmFtPlxyXG4gICAgICAgIC8vLyA8cmV0dXJucz48L3JldHVybnM+XHJcbiAgICAgICAgLy8vIFxyXG4gICAgICAgIFtUZXN0ZWRdXHJcbiAgICAgICAgcHVibGljIGR5bmFtaWMgc2VsZWN0KHN0cmluZyBqcXVlcnlTZWxlY3RvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBqcXVlcnkualF1ZXJ5LnNlbGVjdChqcXVlcnlTZWxlY3RvcikuQXM8ZHluYW1pYz4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG4vKlxyXG4gKiBcclxuICogIFxyXG4gKiBcclxuICogXHJcbiAqL1xyXG5cclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgUmV0eXBlZDtcclxudXNpbmcgQnJpZGdlO1xyXG5uYW1lc3BhY2UgS2VybmVsXHJcbntcclxuXHJcbiAgICBwdWJsaWMgY2xhc3MgS2VuZG9EYXRlUGlja2VyXHJcbiAgICB7XHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBrZW5kbyBuYW1lc3BhY2VcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBkeW5hbWljIGtlbmRvID0gU2NyaXB0LkdldChcImtlbmRvXCIpO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEpxdWVyeSBwcmVmaXhcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBkeW5hbWljIGpxdWVyeSA9IFNjcmlwdC5HZXQoXCJqUXVlcnlcIik7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgX2tlbmRvRGF0ZVBpY2tlcklkO1xyXG5cclxuXHJcbiAgICAgICAgcHVibGljIGR5bmFtaWMgZGF0ZVBpY2tlciB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIEtlbmRvRGF0ZVBpY2tlcihzdHJpbmcgSWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBfa2VuZG9EYXRlUGlja2VySWQgPSBJZDtcclxuICAgICAgICAgICAgZGF0ZVBpY2tlciA9IGpxdWVyeShfa2VuZG9EYXRlUGlja2VySWQuSWQoKSkuZGF0YShcImtlbmRvRGF0ZVBpY2tlclwiKTtcclxuICAgICAgICAgICAganF1ZXJ5KF9rZW5kb0RhdGVQaWNrZXJJZC5JZCgpKS5rZW5kb0RhdGVQaWNrZXIoKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgR2V0RGF0ZVRpbWUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGVQaWNrZXIudmFsdWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2b2lkIFNldERhdGVUaW1lKERhdGVUaW1lIGRhdGVUaW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGR5bmFtaWMga2VuZG9UaW1lID0ga2VuZG8udG9TdHJpbmcoa2VuZG8ucGFyc2VEYXRlKGRhdGVUaW1lKSwgXCJNTS9kZC95eXl5XCIpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVBpY2tlci52YWx1ZShrZW5kb1RpbWUpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoRXhjZXB0aW9uIGVycilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoc3RyaW5nLkZvcm1hdChcIkVycm9yIDp7MH1cIixlcnIuTWVzc2FnZSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyAgTOG6pXkgbmfDoHkgaGnhu4duIHThuqFpIHbDoCBjaOG7jW4gbmfDoHkgbsOgeVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZvaWQgU2V0VG9kYXkoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGRhdGVQaWNrZXIgPSBuZXcgS2VuZG9EYXRlUGlja2VyKF9rZW5kb0RhdGVQaWNrZXJJZCk7XHJcbiAgICAgICAgICAgIGRhdGVQaWNrZXIuU2V0RGF0ZVRpbWUoRGF0ZVRpbWUuTm93KTtcclxuICAgICAgICB9XHJcbi8vLyA8c3VtbWFyeT5cclxuLy8vICBUcnV5IGPhuq1wIEB0aGlzIGtoaSDEkWFuZyB0cm9uZyBow6BtIHjhu60gbMO9IGV2ZW50XHJcbi8vLyA8L3N1bW1hcnk+XHJcbnB1YmxpYyBLZW5kb0RhdGVQaWNrZXIgQHRoaXNcclxue1xyXG4gICAgZ2V0XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBLZW5kb0RhdGVQaWNrZXIoX2tlbmRvRGF0ZVBpY2tlcklkKTtcclxuICAgIH1cclxufXB1YmxpYyBkb20uSFRNTElucHV0RWxlbWVudCBAb2JqZWN0XHJcbntcclxuICAgIGdldFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBkb20uZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoX2tlbmRvRGF0ZVBpY2tlcklkLklkKCkpIGFzIGRvbS5IVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gTMOgbSBjaG8gZGF0ZXBpY2tlciB0cuG7nyB0aMOgbmggd2lkdGggMTAwJVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZvaWQgZ2V0RnVsbFdpZHRoKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEJyaWRnZS5UaGlzLkdldChcInRoaXNcIik7XHJcbiAgICAgICAgICAgIEB0aGlzLkBvYmplY3QuVG9EeW5hbWljKCk7IC8vIGZ1bGwgd2lkdGhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gIEzDoG0gY2hvIGRhdGVwaWNrZXIgY2jhu4kgxJHhu41jICwga2jDtG5nIGdoaSDEkcaw4bujY1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgcHVibGljIHZvaWQgUmVhZE9ubHkoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAganF1ZXJ5KF9rZW5kb0RhdGVQaWNrZXJJZC5JZCgpKS5hdHRyKFwicmVhZG9ubHlcIiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcclxudXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxuXHJcbm5hbWVzcGFjZSBLZXJuZWxcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBjbGFzcyBTZWxlY3RvckV4dGVuc2lvbnNcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0cmluZyBJZCh0aGlzIHN0cmluZyBuYW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiI1wiICsgbmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RyaW5nIENsYXNzKHRoaXMgc3RyaW5nIG5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIjXCIgKyBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgc3RhdGljIHN0cmluZyBUYWcodGhpcyBzdHJpbmcgbmFtZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgQnJpZGdlO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFJldHlwZWQ7XHJcblxyXG5wdWJsaWMgc3RhdGljIGNsYXNzIHN1cHBvcnRcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyB2b2lkIGNsZWFySW5uZXJIdG1sKHRoaXMgZG9tLkhUTUxFbGVtZW50IGVsZW1lbnQpXHJcbiAgICB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gc3RyaW5nLkVtcHR5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgdm9pZCBwbHVzVGV4dCh0aGlzIGRvbS5IVE1MRWxlbWVudCBlbGVtZW50LCBzdHJpbmcgdGV4dClcclxuICAgIHtcclxuICAgICAgICBpZiAoIWVsZW1lbnQuaXNDb25uZWN0ZWQpXHJcbiAgICAgICAgICAgIGRvbS5hbGVydChcIktow7RuZyB0aOG7gyB0aOG7sWMgaGnhu4duIGjDoG5oIMSR4buZbmcgbsOgeVwiKTtcclxuXHJcbiAgICAgICAgdmFyIHRleHRTcGFuID0gbmV3IGRvbS5IVE1MU3BhbkVsZW1lbnQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW5uZXJUZXh0ID0gdGV4dFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KGRvbS5JbnNlcnRQb3NpdGlvbi5hZnRlcmVuZCwgdGV4dFNwYW4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwidXNpbmcgU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWM7XHJcbnVzaW5nIFJldHlwZWQ7XHJcbnVzaW5nIEtlcm5lbC5IdHRwO1xyXG51c2luZyBNb2RlbC5Db21tb247XHJcblxyXG5uYW1lc3BhY2UgQWpheC5BZG1pblxyXG57XHJcbiAgICBcclxuICAgIHB1YmxpYyBjbGFzcyBHZXRTdGFmZkJ5SWQgOiBLZXJuZWwuQWpheFxyXG4gICAge1xyXG5cclxuICAgICAgICAvLyDEkGnMo25oIG5naGnMg2EgbGHMo2kga2nDqsyJdSBkxrDMgyBsacOqzKN1IGNobyBhamF4IEdldFN0YWZmQnlJZCA7XHJcbiAgICAgICAgLy9wdWJsaWMgbmV3IElkZW50aWZpZXIgZGF0YTtcclxuICAgICAgICBwdWJsaWMgR2V0U3RhZmZCeUlkKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFVybCA9IFwiL0FkbWluL0dldFN0YWZmQnlJZFwiO1xyXG4gICAgICAgICAgICBNZXRob2QgPSBIdHRwTWV0aG9kLkdFVDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgUmV0eXBlZDtcclxudXNpbmcgS2VybmVsLkh0dHA7XHJcblxyXG5uYW1lc3BhY2UgQWpheC5BZG1pblxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgU2V0S2V5d29yZEZvclNlYXJjaCA6IEtlcm5lbC5BamF4XHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIFNldEtleXdvcmRGb3JTZWFyY2goKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVXJsID0gXCIvQWRtaW4vU2V0S2V5d29yZEZvclNlYXJjaFwiO1xyXG4gICAgICAgICAgICBNZXRob2QgPSBIdHRwTWV0aG9kLkdFVDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBSZXR5cGVkO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIEtlcm5lbC5IdHRwO1xyXG51c2luZyBLZXJuZWwuQnJvd3NlcjtcclxudXNpbmcgS2VybmVsLkF0dHJpYnV0ZXM7XHJcblxyXG5uYW1lc3BhY2UgS2VybmVsXHJcbntcclxuICAgIFtUZXN0ZWRdXHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBBamF4VGFzayA6IEFqYXhcclxuICAgIHtcclxuXHJcbiAgICAgICAgcHVibGljIGJvb2wgcmVxdWVzdEVycm9yIHsgZ2V0OyBzZXQ7IH1cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFRo4budaSBnaWFuIGNo4budIGThu68gbGnhu4d1IHThu5FpIMSRYSwgdMOtbmggYuG6sW5nIG1pbGkgZ2nDonlcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBpbnQgVGltZUNhbldhaXQgeyBnZXQ7IHNldDsgfVxyXG4gICAgICAgIHB1YmxpYyBvYmplY3QgQWpheFJlc3VsdCB7IGdldDsgc2V0OyB9XHJcbiAgICAgICAgcHVibGljIEFqYXhUYXNrKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEFzeW5jID0gdHJ1ZTtcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9zdWNlc3NUYXNrO1xyXG4gICAgICAgICAgICBlcnJvciA9IF9lcnJvclRhc2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdGVkXVxyXG4gICAgICAgIHB1YmxpYyBhc3luYyBUYXNrPGR5bmFtaWM+IEV4ZWN1dGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgUHJlcGFyZUFqYXhPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIHZhciBBamF4ID0ganF1ZXJ5LmpRdWVyeS5hamF4KG5ldyBqcXVlcnkuSlF1ZXJ5LkFqYXhTZXR0aW5nczxvYmplY3Q+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBkYXRhLFxyXG4gICAgICAgICAgICAgICAgYXN5bmMgPSBBc3luYyxcclxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IE1ldGhvZCxcclxuICAgICAgICAgICAgICAgIHVybCA9IFVybCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBfc3VjZXNzVGFzayxcclxuICAgICAgICAgICAgICAgIGVycm9yID0gX2Vycm9yVGFza1xyXG4gICAgICAgICAgICB9KS5Ub1Rhc2soKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENo4budIGtoaSB0aOG7sWMgaGnhu4duIHhvbmcgYWpheCB0aMOsIHRy4bqjIHbhu4EgY2h14buXaSB0aMO0bmcgYsOhb1xyXG4gICAgICAgICAgICBhd2FpdCBUYXNrLldoZW5BbGw8b2JqZWN0PihBamF4KTtcclxuICAgICAgICAgICAgcmV0dXJuIEFqYXhSZXN1bHQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIHZvaWQgX2Vycm9yVGFzayhqcXVlcnkuSlF1ZXJ5LmpxWEhSPG9iamVjdD4ganFYSFIsIGpxdWVyeS5KUXVlcnkuQWpheC5FcnJvclRleHRTdGF0dXMgdGV4dFN0YXR1cywgc3RyaW5nIGVycm9yVGhyb3duKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVxdWVzdEVycm9yID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtUZXN0ZWRdXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIF9zdWNlc3NUYXNrKG9iamVjdCBkYXRhLCBqcXVlcnkuSlF1ZXJ5LkFqYXguU3VjY2Vzc1RleHRTdGF0dXMgdGV4dFN0YXR1cywganF1ZXJ5LkpRdWVyeS5qcVhIUjxvYmplY3Q+IGpxWEhSKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmVxdWVzdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgIEFqYXhSZXN1bHQgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFJldHlwZWQ7XHJcbnVzaW5nIEtlcm5lbC5BdHRyaWJ1dGVzO1xyXG5uYW1lc3BhY2UgS2VybmVsLkJyb3dzZXJcclxue1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyAgRGlhbG9nIGNvzIEgdGjDqsyJIHPGsMyJIGR1zKNuZyBkYXRhXHJcbiAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgcHVibGljIGNsYXNzIERpYWxvZyA6IERhdGFcclxuICAgIHtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIERpYWxvZ0lkIHRyw6puIHRyw6xuaCBkdXnhu4d0XHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICBwdWJsaWMgc3RyaW5nIGRpYWxvZ0lkO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vICBUacOqdSDEkeG7gSBj4bunYSBkaWFsb2dcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyBzdHJpbmcgVGl0bGU7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJfZGlhbG9nSWRcIj5DaG8gcGhlzIFwIGhpw6rMiW4gdGhpzKMgZGlhbG9nIGtoaSBraGkgX2RpYWxvZ0lkIGtow6FjIHLhu5duZzwvcGFyYW0+XHJcbiAgICAgICAgLy8vIFxyXG4gICAgICAgIFtUZXN0ZWRdXHJcbiAgICAgICAgcHVibGljIERpYWxvZyhzdHJpbmcgX2RpYWxvZ0lkID0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghc3RyaW5nLklzTnVsbE9yV2hpdGVTcGFjZShfZGlhbG9nSWQpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0lkID0gX2RpYWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgQ3JlYXRlTW9kYWxEaWFsb2coX2RpYWxvZ0lkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyAgSGnDqsyJbiB0aGnMoyBkaWFsb2dcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cIkNyZWF0ZWRkaWFsb2dJZFwiPjwvcGFyYW0+XHJcbiAgICAgICAgW1Rlc3RlZF1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIENyZWF0ZU1vZGFsRGlhbG9nKHN0cmluZyBDcmVhdGVkZGlhbG9nSWQgPSBcIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCFzdHJpbmcuSXNOdWxsT3JXaGl0ZVNwYWNlKENyZWF0ZWRkaWFsb2dJZCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIFNob3dkaWFsb2cgxJFhzIMga2jGocyJaSB0YcyjbyB4b25nXHJcbiAgICAgICAgICAgICAgICBzZWxlY3QoQ3JlYXRlZGRpYWxvZ0lkLklkKCkpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIFNob3cgZGlhbG9nIMSRYW5nIGtoxqHMiWkgdGHMo28gKGLEg8yAbmcgdMawzIAga2hvzIFhIG5ldylcclxuICAgICAgICAgICAgICAgIEZpbGxEaWFsb2dEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3QodGhpcy5kaWFsb2dJZC5JZCgpKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gIMOCzIluIGRpYWxvZ1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwiZGlhbG9nSWRcIj48L3BhcmFtPlxyXG4gICAgICAgIFtUZXN0ZWRdXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBIaWRlTW9kYWxEaWFsb2coc3RyaW5nIGRpYWxvZ0lkID0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmIChzdHJpbmcuSXNOdWxsT3JXaGl0ZVNwYWNlKGRpYWxvZ0lkKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0KHRoaXMuZGlhbG9nSWQuSWQoKSkubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0KGRpYWxvZ0lkLklkKCkpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gIMSQacOqzIBuIGdpYcyBIHRyacyjIGNobyBjYcyBYyBmaWVsZCB0cm9uZyBkaWFsb2dcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgRmlsbERpYWxvZ0RhdGEoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gVsahzIFpIHTGsMyAbmcgZGlhbG9nIGN1zKMgdGjDqsyJIHRoacyAIGhhzIBtIG5hzIB5IHNlzIMgxJHGsMahzKNjIMSRacyjbmggbmdoacyDYSBsYcyjaVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgc3RyaW5nIEdldENoaWxkSWQoc3RyaW5nIE5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZy5Gb3JtYXQoXCJ7MH1fezF9XCIsdGhpcy5kaWFsb2dJZCxOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gIFRyYcyJIHbDqsyAIMSRw7TMgWkgdMawxqHMo25nICQoXCIjZGlhbG9nSWRfTmFtZVwiKVxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwiTmFtZVwiPklkIGPhu6dhIGNvbnRyb2wgdHJvbmcgZGlhbG9nPC9wYXJhbT5cclxuICAgICAgICAvLy8gPHJldHVybnM+PC9yZXR1cm5zPlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIGR5bmFtaWMgR2V0Q2hpbGQoc3RyaW5nIE5hbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0KEdldENoaWxkSWQoTmFtZSkuSWQoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIFNldFRpdGxlKHN0cmluZyBUaXRsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEdldENoaWxkKFwiRGlhbG9nVGl0bGVcIikuaHRtbChUaXRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCJ1c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcbnVzaW5nIFJldHlwZWQ7XHJcbnVzaW5nIEJyaWRnZTtcclxubmFtZXNwYWNlIEtlcm5lbFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgS2VuZG9EYXRlUGlja2VyRXZlbnRIYW5kbGVyIDogS2VuZG9EYXRlUGlja2VyXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIEtlbmRvRGF0ZVBpY2tlckV2ZW50SGFuZGxlcihzdHJpbmcgSWQpIDogYmFzZShJZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBAb2JqZWN0ID0gZG9tLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuX2tlbmRvRGF0ZVBpY2tlcklkKSBhcyBkb20uSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgQG9iamVjdC5vbmNoYW5nZSArPSBvbkNoYW5nZTtcclxuICAgICAgICAgICAgQG9iamVjdC5vbmNsaWNrICs9IG9uQ2xpY2s7XHJcbiAgICAgICAgICAgIEBvYmplY3Qub25tb3VzZWVudGVyICs9IG9uSG92ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIG9uQ2hhbmdlKG9iamVjdCBvYmopXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgb25DbGljayhvYmplY3Qgb2JqKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBvbkhvdmVyKG9iamVjdCBvYmopXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJ1c2luZyBLZXJuZWwuT3RoZXJzO1xyXG51c2luZyBTeXN0ZW07XHJcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xyXG51c2luZyBTeXN0ZW0uTGlucTtcclxudXNpbmcgU3lzdGVtLlRleHQ7XHJcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XHJcblxyXG5uYW1lc3BhY2UgS2VybmVsXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBGdW5jdGlvbiA6IElWb2lkXHJcbiAgICB7XHJcbiAgICAgICAgI3JlZ2lvbiBpbmplY3Rpb25zXHJcblxyXG4gICAgICAgIHB1YmxpYyBLZXJuZWwuQnJvd3Nlci5EYXRhIGRhdGE7XHJcblxyXG4gICAgICAgICNlbmRyZWdpb25cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyAgR+G7jWkgaMOgbSBuw6B5IMSR4buDIHRo4buxYyB0aGkgbeG7mXQgZnVuY3Rpb24gY2xhc3NcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgRXhlY3V0ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBIYcyAbSBuYcyAeSBzZcyDIMSRxrDGocyjYyDEkWnMo25oIG5naGnMg2EgbGHMo2kgdHJvbmcgdMawzIBuZyBGdW5jdGlvblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBLaMahzIlpIHRhzKNvIGNhzIFjIGJpw6rMgW5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgVmFyaWFibGVzSW5pdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBIYcyAbSBuYcyAeSBzZcyDIMSRxrDGocyjYyDEkWnMo25oIG5naGnMg2EgbGHMo2kgdHJvbmcgdMawzIBuZyBGdW5jdGlvblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIEZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIEtoxqHMiWkgdGHMo28gY2HMgWMgdGjGsCB2acOqzKNuIGjDtMyDIHRyxqHMoyBjaG8gRnVuY3Rpb25cclxuICAgICAgICAgICAgZGF0YSA9IG5ldyBLZXJuZWwuQnJvd3Nlci5EYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEtlcm5lbDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBNb2R1bGVzLlN0YWZmTWFuYWdlci5GdW5jdGlvbnM7XHJcbm5hbWVzcGFjZSBNb2R1bGVzLlN0YWZmTWFuYWdlclxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgU3RhZmZNYW5hZ2VyX2NsYXNzIDogQ2xhc3NcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgU3RhZmZNYW5hZ2VyX2NsYXNzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFNldFNlYXJjaEtleXdvcmRfZnVuYyA9IG5ldyBGdW5jdGlvbnMuU2V0U2VhcmNoS2V5d29yZCgpO1xyXG4gICAgICAgICAgICBBZGRFdmVudEhhbmRsZXJfZnVuYyA9IG5ldyBGdW5jdGlvbnMuQWRkRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgU2V0U2VhcmNoS2V5d29yZCBTZXRTZWFyY2hLZXl3b3JkX2Z1bmM7XHJcblxyXG4gICAgICAgIHB1YmxpYyBBZGRFdmVudEhhbmRsZXIgQWRkRXZlbnRIYW5kbGVyX2Z1bmM7XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgUmV0eXBlZDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEtlcm5lbFxyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgRGF0ZVBpY2tlciA6IEtlbmRvRGF0ZVBpY2tlckV2ZW50SGFuZGxlclxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBEYXRlUGlja2VyKCkgOiBiYXNlKFwiZGF0ZXBpY2tlclwiKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBvbkNoYW5nZShvYmplY3Qgb2JqKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQHRoaXMuU2V0VG9kYXkoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIG9uQ2xpY2sob2JqZWN0IG9iailcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBvbkhvdmVyKG9iamVjdCBvYmopXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgQnJpZGdlO1xyXG51c2luZyBOZXd0b25zb2Z0Lkpzb247XHJcblxyXG5uYW1lc3BhY2UgS2VybmVsLkRlcGVuZGVjaWVzXHJcbntcclxuICAgIGNsYXNzIEVuc3VyZUxpYnJhcmllc0luc3RhbGxlZENvcnJlY3RseV9mdW5jIDogS2VybmVsLkZ1bmN0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIExpc3Q8c3RyaW5nPiBkZXBlbmRlbmNpZXM7XHJcbiAgICAgICAgcHVibGljIEVuc3VyZUxpYnJhcmllc0luc3RhbGxlZENvcnJlY3RseV9mdW5jKCkgOiBiYXNlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFByZXBhcmVEZXBlbmRlbmNpZXNMaXN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgUHJlcGFyZURlcGVuZGVuY2llc0xpc3QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzID0gZ2xvYmFsOjpCcmlkZ2UuU2NyaXB0LkNhbGxGb3IobmV3IExpc3Q8c3RyaW5nPigpLChfbzEpPT57X28xLkFkZChcImpxdWVyeS5qUXVlcnlcIik7cmV0dXJuIF9vMTt9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgU3VjY2VzcyhzdHJpbmcgbGliKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoc3RyaW5nLkZvcm1hdChcIi0gPHAgc3R5bGU9J2NvbG9yOmdyZWVuOyc+IHswfSDEkcOjIG9rIDwvcD5cIixsaWIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBFcnJvcihzdHJpbmcgbGliKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoc3RyaW5nLkZvcm1hdChcIiA8cCBzdHlsZT0nY29sb3I6cmVkOyc+Q2jGsGEgdGjDqm0gdGjGsCB2aeG7h24gezB9IHbDoG8gZOG7sSDDoW48L3A+XCIsbGliKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIEFjdGlvbjxzdHJpbmc+IENoZWNraWZMaWJyYXJ5SW5zdGFsbGVkKHN0cmluZyBsaWIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0cnlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgU2NyaXB0LldyaXRlKFwiZGVidWdnZXI7XCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSBTY3JpcHQuR2V0KGxpYikuQXM8b2JqZWN0PigpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGsgPSB4LklzUHJvdG90eXBlT2YoUmV0eXBlZC5QcmltaXRpdmUuVW5kZWZpbmVkLlZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQWN0aW9uPHN0cmluZz4oU3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2hcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBY3Rpb248c3RyaW5nPihFcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgRXhlY3V0ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmb3JlYWNoICh2YXIgbGliIGluIGRlcGVuZGVuY2llcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ29uc29sZS5Xcml0ZShzdHJpbmcuRm9ybWF0KFwiS2nhu4NtIHRyYSB0aMawIHZp4buHbiB7MH0gdOG7k24gdOG6oWk/XCIsbGliKSk7XHJcbiAgICAgICAgICAgICAgICBDaGVja2lmTGlicmFyeUluc3RhbGxlZChsaWIpKGxpYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgS2VybmVsO1xyXG51c2luZyBLZXJuZWwuQnJvd3NlcjtcclxudXNpbmcgTW9kZWwuVmlldztcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBSZXR5cGVkO1xyXG5uYW1lc3BhY2UgTW9kdWxlcy5TdGFmZk1hbmFnZXJcclxue1xyXG5cclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyAgTMahzIFwIEVkaXRTdGFmZkRpYWxvZ1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjbGFzcyBFZGl0U3RhZmZEaWFsb2dfY2xhc3MgOiBEaWFsb2dcclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgTW9kZWwuVmlldy5TdGFmZk1hbmFnZXJNb2RlbFZpZXcgbW9kZWw7XHJcbiAgICAgICAgcHVibGljIEVkaXRTdGFmZkRpYWxvZ19jbGFzcygpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaWFsb2dJZCA9IFwiZWRpdE9yQ3JlYXRlU3RhZmZcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgQ3JlYXRlTW9kYWxEaWFsb2coc3RyaW5nIENyZWF0ZWRkaWFsb2dJZCA9IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAobW9kZWwgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGRvbS5hbGVydChcIkNoxrBhIMSRacOqzIBuIHRow7RuZyB0aW4gdmHMgG8gbW9kZWxcIik7XHJcblxyXG4gICAgICAgICAgICBiYXNlLkNyZWF0ZU1vZGFsRGlhbG9nKENyZWF0ZWRkaWFsb2dJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEZpbGxEaWFsb2dEYXRhKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNldFZhbHVlKEdldENoaWxkSWQoXCJuYW1lXCIpLklkKCksIG1vZGVsLk5hbWUpO1xyXG4gICAgICAgICAgICBzZXRWYWx1ZShHZXRDaGlsZElkKFwicG9zaXRpb25cIikuSWQoKSwgbW9kZWwuUG9zaXRpb24pO1xyXG4gICAgICAgICAgICBzZXRWYWx1ZShHZXRDaGlsZElkKFwiZW1haWxcIikuSWQoKSwgbW9kZWwuRW1haWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBTZXRBY3Rpb24oc3RyaW5nIEFjdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEdldENoaWxkKFwiZGlhbG9nQWN0aW9uXCIpLmh0bWwoQWN0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgQWRkRXZlbnRIYW5kbGVyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEdldENoaWxkKFwiZGlhbG9nQWN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgVGhpcy5HZXQoXCJkaWFsb2dBY3Rpb25fb25DbGlja1wiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgZGlhbG9nQWN0aW9uX29uQ2xpY2soKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZG9tLmFsZXJ0KFwid29ya1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBSZXR5cGVkO1xyXG51c2luZyBLZXJuZWw7XHJcbnVzaW5nIEFqYXguQWRtaW47XHJcbnVzaW5nIEtlcm5lbC5BdHRyaWJ1dGVzO1xyXG5cclxubmFtZXNwYWNlIE1vZHVsZXMuU3RhZmZNYW5hZ2VyLkZ1bmN0aW9uc1xyXG57XHJcbiAgICBwdWJsaWMgY2xhc3MgQWRkRXZlbnRIYW5kbGVyIDogRnVuY3Rpb25cclxuICAgIHtcclxuICAgICAgICAjcmVnaW9uIFwiY2xhc3NcIlxyXG5cclxuICAgICAgICBwcml2YXRlIEtlcm5lbC5Ccm93c2VyLkRhdGEgX2RhdGE7XHJcbiAgICAgICAgI2VuZHJlZ2lvblxyXG5cclxuICAgICAgICAjcmVnaW9uIFwidmFyXCJcclxuXHJcbiAgICAgICBcclxuICAgICAgICBwdWJsaWMgU2V0S2V5d29yZEZvclNlYXJjaCBhamF4O1xyXG4gICAgICAgIHB1YmxpYyBkb20uSFRNTEJ1dHRvbkVsZW1lbnQgYnRuU2VhcmNoO1xyXG5cclxuICAgICAgICAjZW5kcmVnaW9uXHJcblxyXG4gICAgICAgIHB1YmxpYyBBZGRFdmVudEhhbmRsZXIoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgX2RhdGEgPSBuZXcgS2VybmVsLkJyb3dzZXIuRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBFeGVjdXRlKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZhcmlhYmxlc0luaXQoKTtcclxuXHJcbiAgICAgICAgICAgIFNldEV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1Rlc3RlZF1cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBWYXJpYWJsZXNJbml0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ0blNlYXJjaCA9IF9kYXRhLmdldEVsZW1lbnRCeUlkPGRvbS5IVE1MQnV0dG9uRWxlbWVudD4oXCJidG5TZWFyY2hcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdGVkXVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgU2V0RXZlbnRIYW5kbGVyKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJ0blNlYXJjaC5vbmNsaWNrICs9IGJ0blNlYXJjaE9uQ2xpY2s7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgW1Rlc3RlZF1cclxuICAgICAgICBwdWJsaWMgdmlydHVhbCB2b2lkIGJ0blNlYXJjaE9uQ2xpY2soZG9tLk1vdXNlRXZlbnQgZXYpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb25zb2xlLldyaXRlKFwiU8awzKMga2nDqsyjbiBidG5TZWFyY2ggQ2xpY2tcIik7XHJcbiAgICAgICAgICAgIG5ldyBGdW5jdGlvbnMuU2V0U2VhcmNoS2V5d29yZCgpLkV4ZWN1dGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBSZXR5cGVkO1xyXG51c2luZyBLZXJuZWw7XHJcbnVzaW5nIEFqYXguQWRtaW47XHJcbnVzaW5nIEtlcm5lbC5BdHRyaWJ1dGVzO1xyXG5cclxubmFtZXNwYWNlIE1vZHVsZXMuU3RhZmZNYW5hZ2VyLkZ1bmN0aW9uc1xyXG57XHJcbiAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAvLy8gIEdhzIFuIHNlc3Npb24ga2V5d29yZCDEkcOqzIkgcGh1zKNjIHZ1zKMgY2hvIHRpzIBtIGtpw6rMgW1cclxuICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICBwdWJsaWMgY2xhc3MgU2V0U2VhcmNoS2V5d29yZCA6IEZ1bmN0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgI3JlZ2lvbiBcImNsYXNzXCJcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICNlbmRyZWdpb25cclxuXHJcbiAgICAgICAgI3JlZ2lvbiBcInZhclwiXHJcblxyXG4gICAgICAgIHB1YmxpYyBTZXRLZXl3b3JkRm9yU2VhcmNoIGFqYXg7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBrZXl3b3JkO1xyXG4gICAgICAgICNlbmRyZWdpb25cclxuXHJcbiAgICAgICAgcHVibGljIFNldFNlYXJjaEtleXdvcmQoKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbVGVzdGVkXVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIFZhcmlhYmxlc0luaXQoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5d29yZCA9IGRhdGEuZ2V0VmFsdWVCeUlkPHN0cmluZz4oXCJFbWFpbFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEV4ZWN1dGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVmFyaWFibGVzSW5pdCgpO1xyXG4gICAgICAgICAgICBhamF4UmVxdWVzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBcclxuICAgICAgICBbVGVzdGVkXVxyXG4gICAgICAgIHB1YmxpYyB2aXJ0dWFsIHZvaWQgYWpheFJlcXVlc3QoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWpheCA9IG5ldyBTZXRLZXl3b3JkRm9yU2VhcmNoKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXN5bmMgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IG5ld1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleXdvcmQgPSBrZXl3b3JkXHJcbiAgICAgICAgICAgICAgICB9LlRvRHluYW1pYygpXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBhamF4LnN1Y2Nlc3MgPSBzZXRTZWFyY2hLZXl3b3JkX29rO1xyXG4gICAgICAgICAgICBhamF4LmVycm9yID0gc2V0U2VhcmNoS2V5d29yZF9lcnJvcjtcclxuICAgICAgICAgICAgYWpheC5SZXF1ZXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vICBMw7TMg2kgeGHMiXkgcmEga2hpIGdhzIFuIHNlc3Npb24ga2V5d29yZFxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgLy8vIDxwYXJhbSBuYW1lPVwianFYSFJcIj48L3BhcmFtPlxyXG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cInRleHRTdGF0dXNcIj48L3BhcmFtPlxyXG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cImVycm9yVGhyb3duXCI+PC9wYXJhbT5cclxuICAgICAgICBwcml2YXRlIHZvaWQgc2V0U2VhcmNoS2V5d29yZF9lcnJvcihqcXVlcnkuSlF1ZXJ5LmpxWEhSPG9iamVjdD4ganFYSFIsIGpxdWVyeS5KUXVlcnkuQWpheC5FcnJvclRleHRTdGF0dXMgdGV4dFN0YXR1cywgc3RyaW5nIGVycm9yVGhyb3duKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZG9tLmFsZXJ0KFwiQmnMoyBsw7TMg2kgcsO0zIBpXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyAgTmHMo3AgbGHMo2kgZ3JpZCBkYW5oIHNhzIFjaCBuaMOibiB2acOqbiBtw7TMg2kga2hpIMSRYcyDIGdhzIFuIHNlc3Npb24ga2V5d29yZCB0aGHMgG5oIGPDtG5nXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJkYXRhXCI+PC9wYXJhbT5cclxuICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJ0ZXh0U3RhdHVzXCI+PC9wYXJhbT5cclxuICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJqcVhIUlwiPjwvcGFyYW0+XHJcbiAgICAgICAgLy8vIFxyXG4gICAgICAgIFtUZXN0ZWRdXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIHNldFNlYXJjaEtleXdvcmRfb2sob2JqZWN0IGRhdGEsIGpxdWVyeS5KUXVlcnkuQWpheC5TdWNjZXNzVGV4dFN0YXR1cyB0ZXh0U3RhdHVzLCBqcXVlcnkuSlF1ZXJ5LmpxWEhSPG9iamVjdD4ganFYSFIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvL2RvbS5hbGVydChcIk9rXCIpO1xyXG4gICAgICAgICAgICAvL3ZhciB0cnlfZGlhbG9nID0gbmV3IExpYnJhcnkuQnJvd3Nlci5EaWFsb2coXCJlZGl0T3JDcmVhdGVTdGFmZlwiKTtcclxuICAgICAgICAgICAgLy9TeXN0ZW0uVGhyZWFkaW5nLlRocmVhZC5TbGVlcCgzMDAwKTtcclxuICAgICAgICAgICAgLy90cnlfZGlhbG9nLkhpZGVNb2RhbERpYWxvZygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIEtlbmRvR3JpZCA9IHRoaXMuZGF0YS5nZXRLZW5kb0dyaWQoXCJncmlkXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhLmtlbmRHcmlkUmVsb2FkRGF0YShLZW5kb0dyaWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG51c2luZyBSZXR5cGVkO1xyXG51c2luZyBLZXJuZWw7XHJcbnVzaW5nIEFqYXguQWRtaW47XHJcbnVzaW5nIEtlcm5lbC5BdHRyaWJ1dGVzO1xyXG51c2luZyBNb2RlbC5Db21tb247XHJcblxyXG5uYW1lc3BhY2UgTW9kdWxlcy5TdGFmZk1hbmFnZXIuRnVuY3Rpb25zXHJcbntcclxuICAgIC8vLyA8c3VtbWFyeT5cclxuICAgIC8vLyAgTMOizIF5IHRow7RuZyB0aW4gbmjDom4gdmnDqm4gZMawzKNhIHZhzIBvIElkXHJcbiAgICAvLy8gIEdhzIFuIHZhzIBvIGRpYWxvZyDEkcOqzIkgaGnDqsyJbiB0aGnMo1xyXG4gICAgLy8vIDwvc3VtbWFyeT5cclxuICAgIHB1YmxpYyBjbGFzcyBTaG93RGlhbG9nRWRpdFN0YWZmQnlJZCA6IEZ1bmN0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgI3JlZ2lvbiBcInZhclwiXHJcblxyXG4gICAgICAgIHB1YmxpYyBBamF4LkFkbWluLkdldFN0YWZmQnlJZCBhamF4O1xyXG4gICAgICAgIHB1YmxpYyBpbnQgSWQ7XHJcbiAgICAgICAgI2VuZHJlZ2lvblxyXG5cclxuICAgICAgICBwdWJsaWMgU2hvd0RpYWxvZ0VkaXRTdGFmZkJ5SWQoaW50IElkKSA6IGJhc2UoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5JZCA9IElkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJyaWRlIHZvaWQgRXhlY3V0ZSgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgICBhamF4UmVxdWVzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHZpcnR1YWwgdm9pZCBhamF4UmVxdWVzdCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhamF4ID0gbmV3IEFqYXguQWRtaW4uR2V0U3RhZmZCeUlkKClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQXN5bmMgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IG5ldyBJZGVudGlmaWVyKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBJZCA9IElkXHJcbiAgICAgICAgICAgICAgICB9LlRvRHluYW1pYygpLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgYWpheC5zdWNjZXNzID0gZGF0YV9vaztcclxuICAgICAgICAgICAgYWpheC5lcnJvciA9IGRhdGFfZXJvcjtcclxuICAgICAgICAgICAgYWpheC5SZXF1ZXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSB2b2lkIGRhdGFfZXJvcihqcXVlcnkuSlF1ZXJ5LmpxWEhSPG9iamVjdD4ganFYSFIsIGpxdWVyeS5KUXVlcnkuQWpheC5FcnJvclRleHRTdGF0dXMgdGV4dFN0YXR1cywgc3RyaW5nIGVycm9yVGhyb3duKVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHZvaWQgZGF0YV9vayhvYmplY3QgZGF0YSwganF1ZXJ5LkpRdWVyeS5BamF4LlN1Y2Nlc3NUZXh0U3RhdHVzIHRleHRTdGF0dXMsIGpxdWVyeS5KUXVlcnkuanFYSFI8b2JqZWN0PiBqcVhIUilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBtb2RlbCA9IGRhdGEuQXM8TW9kZWwuVmlldy5TdGFmZk1hbmFnZXJNb2RlbFZpZXc+KCk7XHJcbiAgICAgICAgICAgIHZhciBlZGl0RGlhbG9nID0gbmV3IEVkaXRTdGFmZkRpYWxvZ19jbGFzcygpO1xyXG4gICAgICAgICAgICBlZGl0RGlhbG9nLm1vZGVsID0gbW9kZWw7XHJcbiAgICAgICAgICAgIGVkaXREaWFsb2cuU2V0VGl0bGUoXCJDw6LMo3AgbmjDosyjdCB0aMO0bmcgdGluIG5ow6JuIHZpw6puXCIpO1xyXG4gICAgICAgICAgICBlZGl0RGlhbG9nLlNldEFjdGlvbihDb25zdHMuZGlhbG9nQWN0aW9uRWRpdCk7XHJcbiAgICAgICAgICAgIGVkaXREaWFsb2cuQ3JlYXRlTW9kYWxEaWFsb2coKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIEtlcm5lbDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIE1vZHVsZXMuU3RhZmZNYW5hZ2VyXHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTdGFydHVwIDogRnVuY3Rpb25cclxuICAgIHtcclxuICAgICAgICBwdWJsaWMgU3RhcnR1cCgpIDogYmFzZSgpXHJcbiAgICAgICAge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIEV4ZWN1dGUoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBTdGFmZk1hbmFnZXJfY2xhc3MgPSBuZXcgU3RhZmZNYW5hZ2VyX2NsYXNzKCk7XHJcbiAgICAgICAgICAgICAgICBTdGFmZk1hbmFnZXJfY2xhc3MuQWRkRXZlbnRIYW5kbGVyX2Z1bmMuRXhlY3V0ZSgpO1xyXG4gICAgICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoXCJNb2R1bGUgU3RhZmZNYW5nZXIgxJFhzIMga2jGocyJaSDEkcO0zKNuZ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBDb25zb2xlLldyaXRlKFwiTOG7l2kgeOG6o3kgcmEga2hpIGto4bufaSDEkeG7mW5nIFN0YWZmTWFuYWdlclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwidXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkxpbnE7XHJcbnVzaW5nIFN5c3RlbS5UZXh0O1xyXG51c2luZyBTeXN0ZW0uVGhyZWFkaW5nLlRhc2tzO1xyXG5cclxubmFtZXNwYWNlIEtlcm5lbC5EZXBlbmRlY2llc1xyXG57XHJcbiAgICBjbGFzcyBESSA6IEVuc3VyZUxpYnJhcmllc0luc3RhbGxlZENvcnJlY3RseV9mdW5jXHJcbiAgICB7XHJcbiAgICAgICAgLy8gVGjDqm0gbeG7mXQgdGjGsCB2aeG7h24gVGVzdExpYjIgxJHhu4Mga2nhu4NtIHRyYVxyXG4gICAgICAgIHB1YmxpYyBvdmVycmlkZSB2b2lkIFByZXBhcmVEZXBlbmRlbmNpZXNMaXN0KClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhc2UuUHJlcGFyZURlcGVuZGVuY2llc0xpc3QoKTtcclxuICAgICAgICAgICAgZGVwZW5kZW5jaWVzLkFkZChcIlRlc3RMaWIyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBFcnJvcihzdHJpbmcgbGliKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQ29uc29sZS5Xcml0ZUxpbmUoc3RyaW5nLkZvcm1hdChcIktp4buDdSB0aMO0bmcgYsOhbyBs4buXaSB0aOG7qSAyIDogTOG7l2kgXCIpKyBsaWIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgb3ZlcnJpZGUgdm9pZCBTdWNjZXNzKHN0cmluZyBsaWIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBDb25zb2xlLldyaXRlTGluZShzdHJpbmcuRm9ybWF0KFwi4bucIGNo4bqheSDEkcaw4bujYyBy4buTaSBuaMOpIDogezB9XCIsbGliKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdCn0K
