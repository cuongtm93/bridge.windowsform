using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Retyped;
using static Retyped.dom;

namespace System.Windows.Forms
{
    public class MessageBox
    {
        /// <summary>
        ///  Xuất dialog thông báo lên màn hình
        /// </summary>
        /// <param name="message">Chuỗi thông điệp </param>
        public static void Show(string message)
        {
            const float goldenRatio = 1.61803398875f;
            const int MessageBoxHeight = 200;
            const int bottomPanelHeight = 30;
            const int fontSize = 15;
            string messageboxId = "gdf235";
            var MessageBoxForm = new Form()
            {
                Text = "Thông báo",
                Size = new Drawing.Size()
                {
                    Width = (int)(MessageBoxHeight * goldenRatio),
                    Height = MessageBoxHeight
                },
                MaximizeBox = false,
                MinimizeBox = false
            };


            var MessageHolder = new Label()
            {
                //BackColor = Color.LemonChiffon,
                ForeColor = Color.Green,
                Name = $"{messageboxId}_txtMessage",
                Text = $"{message}",
                Font = new Drawing.Font("San Serif", fontSize),
                Dock = DockStyle.Fill
            };

            var bottomPanel = new Panel()
            {
                Dock = DockStyle.Bottom,
                Height = bottomPanelHeight,
                Visible = true
            };
            var btnClose = new Button()
            {
                Text = "Đóng",
                Height = bottomPanelHeight,
                Width = 50,
                Visible = true,
            };

            btnClose.Element.style.left = "100px";
            bottomPanel.Controls.Add(btnClose);
            MessageBoxForm.Controls.Add(MessageHolder);
            MessageBoxForm.Controls.Add(bottomPanel);
            bottomPanel.ResumeLayout();
            MessageBoxForm.StartPosition = FormStartPosition.CenterScreen;

            MessageBoxForm.Load += (sender, evt) =>
            {
                MessageHolder.Element.style.top = "30px";
                MessageHolder.Element.style.left = "15px";
            };

            MessageBoxForm.ShowDialog();
        }
    }
}
