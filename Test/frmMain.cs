using Kernel;
using Kernel.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static Retyped.dom;
namespace Test
{
    public class SaleInfo
    {
        public int Id;
        public string SaleBy;
    }
    public partial class frmMain : Form
    {
        public frmMain()
        {
            InitializeComponent();
        }

        private async void button1_Click(object sender, EventArgs e)
        {
            try
            {
                var Ajax = new AjaxTask()
                {
                    Url = "https://account.esms.vn/Admin/Salesby",
                    Method = HttpMethod.GET,
                };
                await Ajax.Execute();

                if (!Ajax.requestError)
                {
                    var message = "Lấy dữ liệu thành công";
                    var data = Ajax.AjaxResult.As<SaleInfo[]>();
                    var counter = 0;
                    // lấy 3 thằng sale đầu tiên
                    foreach (var sale in data)
                    {
                        message += $" id = {sale.Id} , tên = {sale.SaleBy} ";

                        counter++;
                        if (counter == 3)
                            break;
                    }

                    MessageBox.Show(message);
                }
                else
                {
                    MessageBox.Show("Lỗi Ajax");
                }
            }
            catch (Exception err)
            {
                MessageBox.Show($"Exception : {err.Message}");
            }


        }
    }
}
