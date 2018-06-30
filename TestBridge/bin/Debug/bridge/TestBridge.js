/**
 * @version 1.0.97.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 17.0.0
 */
Bridge.assembly("TestBridge", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.frmMain", {
        inherits: [System.Windows.Forms.Form],
        fields: {
            /**
             * Required designer variable.
             *
             * @instance
             * @private
             * @memberof Test.frmMain
             * @type System.ComponentModel.IContainer
             */
            components: null,
            comboBox1: null,
            button1: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
                System.Windows.Forms.Form.ctor.call(this);
                this.InitializeComponent();
            }
        },
        methods: {
            button1_Click: function (sender, e) {
                var $step = 0,
                    $task1, 
                    $taskResult1, 
                    $jumpFromFinally, 
                    $returnValue, 
                    Ajax, 
                    $t, 
                    message, 
                    data, 
                    counter, 
                    sale, 
                    err, 
                    $async_e, 
                    $async_e1, 
                    $asyncBody = Bridge.fn.bind(this, function () {
                        try {
                            for (;;) {
                                $step = System.Array.min([1,2,3,4], $step);
                                switch ($step) {

                                    case 1: {
                                        Ajax = ($t = new Kernel.AjaxTask(), $t.Url = "https://account.esms.vn/Admin/Salesby", $t.Method = "GET", $t);
                                        $task1 = Ajax.Execute();
                                        $step = 2;
                                        $task1.continueWith($asyncBody, true);
                                        return;
                                    }
                                    case 2: {
                                        $taskResult1 = $task1.getAwaitedResult();
                                        if (!Ajax.requestError) {
                                            message = "Lấy dữ liệu thành công";
                                            data = Bridge.unbox(Ajax.AjaxResult);
                                            counter = 0;
                                            // lấy 3 thằng sale đầu tiên
                                            $t = Bridge.getEnumerator(data);
                                            try {
                                                while ($t.moveNext()) {
                                                    sale = $t.Current;
                                                    message = (message || "") + ((System.String.format(" id = {0} , tên = {1} ", Bridge.box(sale.Id, System.Int32), sale.SaleBy)) || "");

                                                    counter = (counter + 1) | 0;
                                                    if (counter === 3) {
                                                        break;
                                                    }
                                                }
                                            } finally {
                                                if (Bridge.is($t, System.IDisposable)) {
                                                    $t.System$IDisposable$Dispose();
                                                }
                                            }
                                            System.Windows.Forms.MessageBox.Show(message);
                                        } else {
                                            System.Windows.Forms.MessageBox.Show("Lỗi Ajax");
                                        }
                                        $step = 4;
                                        continue;
                                    }
                                    case 3: {
                                        System.Windows.Forms.MessageBox.Show(System.String.format("Exception : {0}", [err.Message]));
                                        $async_e = null;
                                        $step = 4;
                                        continue;
                                    }
                                    case 4: {
                                        return;
                                    }
                                    default: {
                                        return;
                                    }
                                }
                            }
                        } catch($async_e1) {
                            $async_e = System.Exception.create($async_e1);
                            if ( $step >= 1 && $step <= 2 ) {
                                err = $async_e;
                                $step = 3;
                                $asyncBody();
                                return;
                            }
                            throw $async_e;
                        }
                    }, arguments);

                $asyncBody();
            },
            /**
             * Clean up any resources being used.
             *
             * @instance
             * @protected
             * @override
             * @this Test.frmMain
             * @memberof Test.frmMain
             * @param   {boolean}    disposing    true if managed resources should be disposed; otherwise, false.
             * @return  {void}
             */
            Dispose$1: function (disposing) {
                if (disposing && (this.components != null)) {
                    this.components.System$IDisposable$Dispose();
                }
                System.Windows.Forms.Form.prototype.Dispose$1.call(this, disposing);
            },
            /**
             * Required method for Designer support - do not modify
             the contents of this method with the code editor.
             *
             * @instance
             * @private
             * @this Test.frmMain
             * @memberof Test.frmMain
             * @return  {void}
             */
            InitializeComponent: function () {
                this.comboBox1 = new System.Windows.Forms.ComboBox();
                this.button1 = new System.Windows.Forms.Button();
                this.SuspendLayout();
                //
                // comboBox1
                //
                this.comboBox1.Font = new System.Drawing.Font.$ctor1("Microsoft Sans Serif", 15.75, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (0));
                this.comboBox1.FormattingEnabled = true;
                this.comboBox1.Items.AddRange(System.Array.init(["Sale", "Kỹ thuật", "Phó giám đốc", "Trưởng Phòng"], System.Object));
                this.comboBox1.Location = new System.Drawing.Point.$ctor1(75, 27);
                this.comboBox1.Name = "comboBox1";
                this.comboBox1.Size = new System.Drawing.Size.$ctor2(187, 33);
                this.comboBox1.TabIndex = 0;
                //
                // button1
                //
                this.button1.Location = new System.Drawing.Point.$ctor1(300, 27);
                this.button1.Name = "button1";
                this.button1.Size = new System.Drawing.Size.$ctor2(96, 33);
                this.button1.TabIndex = 1;
                this.button1.Text = "button1";
                this.button1.UseVisualStyleBackColor = true;
                this.button1.addClick(Bridge.fn.cacheBind(this, this.button1_Click));
                //
                // frmMain
                //
                this.AutoScaleDimensions = new System.Drawing.SizeF.$ctor3(6.0, 13.0);
                this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
                this.ClientSize = new System.Drawing.Size.$ctor2(674, 224);
                this.Controls.add(this.button1);
                this.Controls.add(this.comboBox1);
                this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
                this.Name = "frmMain";
                this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
                this.Tag = "";
                this.Text = "\"Ứng dụng ví dụ 1 #windows form to Javascript#\"";
                this.ResumeLayout$1(false);

            }
        }
    });

    Bridge.define("Test.SaleInfo", {
        fields: {
            Id: 0,
            SaleBy: null
        }
    });

    Bridge.define("TestBridge.Program", {
        main: function Main () {
            new Test.frmMain().Show();
        }
    });
});

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJUZXN0QnJpZGdlLmpzIiwKICAic291cmNlUm9vdCI6ICIiLAogICJzb3VyY2VzIjogWyIuLi9UZXN0L2ZybU1haW4uY3MiLCJQcm9ncmFtLmNzIl0sCiAgIm5hbWVzIjogWyIiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQVM4REE7Ozs7Ozs7O2dCQWFsREE7Ozs7cUNBRzZCQSxRQUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FJeENBLE9BQVdBLFVBQUlBLGlGQUdGQTt3Q0FFYkEsU0FBTUE7Ozs7Ozs7d0NBRU5BLElBQUlBLENBQUNBOzRDQUVEQTs0Q0FDQUEsT0FBV0E7NENBQ1hBOzs0Q0FFQUEsMEJBQXFCQTs7OztvREFFakJBLDZCQUFXQSxnREFBdUNBLG1DQUFRQTs7b0RBRTFEQTtvREFDQUEsSUFBSUE7d0RBQ0FBOzs7Ozs7Ozs0Q0FHUkEscUNBQWdCQTs7NENBSWhCQTs7Ozs7O3dDQUtKQSxxQ0FBZ0JBLHlDQUFnQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQTdDeEJBO2dCQUU1QkEsSUFBSUEsYUFBYUEsQ0FBQ0EsbUJBQWNBO29CQUU1QkE7O2dCQUVKQSx5REFBYUE7Ozs7Ozs7Ozs7Ozs7Z0JBV2JBLGlCQUFpQkEsSUFBSUE7Z0JBQ3JCQSxlQUFlQSxJQUFJQTtnQkFDbkJBOzs7O2dCQUlBQSxzQkFBc0JBLElBQUlBLDBEQUFvREEsa0NBQWtDQSxtQ0FBbUNBLENBQUNBO2dCQUNwSkE7Z0JBQ0FBLDhCQUE4QkE7Z0JBSzlCQSwwQkFBMEJBLElBQUlBO2dCQUM5QkE7Z0JBQ0FBLHNCQUFzQkEsSUFBSUE7Z0JBQzFCQTs7OztnQkFJQUEsd0JBQXdCQSxJQUFJQTtnQkFDNUJBO2dCQUNBQSxvQkFBb0JBLElBQUlBO2dCQUN4QkE7Z0JBQ0FBO2dCQUNBQTtnQkFDQUEsc0JBQXNCQSxBQUF3QkE7Ozs7Z0JBSTlDQSwyQkFBMkJBLElBQUlBO2dCQUMvQkEscUJBQXFCQTtnQkFDckJBLGtCQUFrQkEsSUFBSUE7Z0JBQ3RCQSxrQkFBa0JBO2dCQUNsQkEsa0JBQWtCQTtnQkFDbEJBLHVCQUF1QkE7Z0JBQ3ZCQTtnQkFDQUEscUJBQXFCQTtnQkFDckJBO2dCQUNBQTtnQkFDQUE7Ozs7Ozs7Ozs7Ozs7OztZQzNEQUEsSUFBSUEiLAogICJzb3VyY2VzQ29udGVudCI6IFsidXNpbmcgS2VybmVsO1xyXG51c2luZyBLZXJuZWwuSHR0cDtcclxudXNpbmcgU3lzdGVtO1xyXG51c2luZyBTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYztcclxudXNpbmcgU3lzdGVtLkNvbXBvbmVudE1vZGVsO1xyXG51c2luZyBTeXN0ZW0uRGF0YTtcclxudXNpbmcgU3lzdGVtLkRyYXdpbmc7XHJcbnVzaW5nIFN5c3RlbS5MaW5xO1xyXG51c2luZyBTeXN0ZW0uVGV4dDtcclxudXNpbmcgU3lzdGVtLlRocmVhZGluZy5UYXNrcztcclxudXNpbmcgU3lzdGVtLldpbmRvd3MuRm9ybXM7XHJcbm5hbWVzcGFjZSBUZXN0XHJcbntcclxuICAgIHB1YmxpYyBjbGFzcyBTYWxlSW5mb1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBpbnQgSWQ7XHJcbiAgICAgICAgcHVibGljIHN0cmluZyBTYWxlQnk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcGFydGlhbCBjbGFzcyBmcm1NYWluIDogRm9ybVxyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBmcm1NYWluKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEluaXRpYWxpemVDb21wb25lbnQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgYXN5bmMgdm9pZCBidXR0b24xX0NsaWNrKG9iamVjdCBzZW5kZXIsIEV2ZW50QXJncyBlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHJ5XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciBBamF4ID0gbmV3IEFqYXhUYXNrKClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBVcmwgPSBcImh0dHBzOi8vYWNjb3VudC5lc21zLnZuL0FkbWluL1NhbGVzYnlcIixcclxuICAgICAgICAgICAgICAgICAgICBNZXRob2QgPSBIdHRwTWV0aG9kLkdFVCxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBBamF4LkV4ZWN1dGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIUFqYXgucmVxdWVzdEVycm9yKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJM4bqleSBk4buvIGxp4buHdSB0aMOgbmggY8O0bmdcIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEFqYXguQWpheFJlc3VsdC5BczxTYWxlSW5mb1tdPigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBs4bqleSAzIHRo4bqxbmcgc2FsZSDEkeG6p3UgdGnDqm5cclxuICAgICAgICAgICAgICAgICAgICBmb3JlYWNoICh2YXIgc2FsZSBpbiBkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSArPSBzdHJpbmcuRm9ybWF0KFwiIGlkID0gezB9ICwgdMOqbiA9IHsxfSBcIixzYWxlLklkLHNhbGUuU2FsZUJ5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIgPT0gMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTWVzc2FnZUJveC5TaG93KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VCb3guU2hvdyhcIkzhu5dpIEFqYXhcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKEV4Y2VwdGlvbiBlcnIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIE1lc3NhZ2VCb3guU2hvdyhzdHJpbmcuRm9ybWF0KFwiRXhjZXB0aW9uIDogezB9XCIsZXJyLk1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsInVzaW5nIFN5c3RlbTtcbnVzaW5nIFN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljO1xudXNpbmcgU3lzdGVtLkxpbnE7XG51c2luZyBTeXN0ZW0uVGV4dDtcbnVzaW5nIFN5c3RlbS5UaHJlYWRpbmcuVGFza3M7XG51c2luZyBUZXN0O1xuXG5uYW1lc3BhY2UgVGVzdEJyaWRnZVxue1xuICAgIHB1YmxpYyBjbGFzcyBQcm9ncmFtXG4gICAge1xuICAgICAgICBwdWJsaWMgc3RhdGljIHZvaWQgTWFpbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5ldyBmcm1NYWluKCkuU2hvdygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0KfQo=
