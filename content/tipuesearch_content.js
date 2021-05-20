var tipuesearch = {"pages": [{'title': 'About', 'text': "\n 40823102 四設計二甲 劉怡萱 \n 個人倉儲: 40823102 cd2021 \n Youtube: Aasta's channel \n \n", 'tags': '', 'url': 'About.html'}, {'title': 'Stage1', 'text': '', 'tags': '', 'url': 'Stage1.html'}, {'title': 'W1', 'text': '在github建立cd2021倉儲 \n \n 利用git clone 倉儲並將資料複製過去cd2021資料夾後成功架設網頁 \n \n 利用Leo Editor編輯pelican.leo 以建立blog網誌 \n \n 成功 建立blog網誌 \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '標題: 2021-協同產品設計實習-stage1-ag5 \n 專題題目:倒車入庫 \n \n 專題 動機:由於最近出門都遇到下雨因此想學開車，也聽到很多會開車的人都說倒車入庫是最難的，所以設計車子倒車入庫 \n 預定第二周進度:繪製零件圖並放入coppeliasim進行色調調整 \n \n 利用繪圖軟體Inventor分別繪製零件圖及組合圖 \n \n \n 將組合圖檔儲存成stl檔後在coppeliasim開啟並進行色調調整 \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '預定第三週進度:在coppeliasim進行模擬並修爭錯誤 \n 預定進度:在coppeliasim進行模擬並修爭錯誤 \n Youtube影片: 2021-協同產品設計實習-cd2021 w3 \n \n 分別新增四個軸並先選曲軸再選取對應的車輪Object/Item Translation/Position及Object/Item Rotation/Orientation使兩件方向及位置 \n \n \n 四根軸與車輪設定完成並將被驅動得車輪拖至軸下 \n \n 遇到問題:發現車子不如預期做動 \n \n 發現原因車輪和車身不能貼合才可以做動因此將車輪往外移 \n 對各軸設定速度並完成做動 \n \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '第四週預定進度:上台報告 \n \n 2021-協同產品設計實習-stage1-ag5報告書 \n 2021-協同產品設計實習-stage1-ag5影片 \n 各組簡報所花費的時間 \n \n 討論 \n 若檔案數較大應如何若檔案數較大應如何計算各組花費時間? \n 除了手動逐一計算外，透過參考文獻我們發現可用ffprobe來使用外部指令，也就是從FFmpeg Wiki運行以下命令 \n import subprocess\n\ndef get_length(filename):\n    result = subprocess.run(["ffprobe", "-v", "error", "-show_entries",\n                             "format=duration", "-of",\n                             "default=noprint_wrappers=1:nokey=1", filename],\n        stdout=subprocess.PIPE,\n        stderr=subprocess.STDOUT)\n    return float(result.stdout) \n 也可以-printm_format json與-show_streams json一起使用 \n 參考資料: https://stackoverflow.com/questions/3844430/how-to-get-the-duration-of-a-video-in-python \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'Stage2', 'text': '', 'tags': '', 'url': 'Stage2.html'}, {'title': 'W5', 'text': '這次Stage2的專案，我們討論並決定以Stage1-18未完成的排球扣球練習器改良；原本的主體只有單一的骨架與球軌，我們將改良成雙向作動與作動時間長的機構，讓排球可以順利滑動增加投球效率；並改良夾持的機構，改良成讓球在經圓盤的週期滾動，在球與圓盤的空洞重合後自動掉落 \n 原Stage1-18做動 \n \n 預定每週進度 \n W5 討論專題方向、每週進度 \n W6 繪製零件圖、在coppeliasim進行模擬並修正錯誤 \n W7 \xa0 在coppeliasim進行模擬並修正錯誤、進行Heroku協統 \n W8 修正零件圖、在coppeliasim進行模擬並修正錯誤、準備pdf、製作reavel並分配上台報告內容 \n W9 上台報告 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '預定進度:繪製零件圖、在coppeliasim進行模擬並修正錯誤 \n 在組內分工裡我負責繪圖及協助編輯小組網頁 \n \n 骨架、球軌、接住球的部分 \n \n 轉盤及支撐軸，透過轉盤週期作旋轉動作讓球也成週期落下 \n \n \n 發球器的軸、底座、擊球的轉臂 \n \n 發球器組合圖 \n \n 發球器做動 \n \n 整體組合圖 \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '預定進度: 在coppeliasim進行模擬並修正錯誤、進行Heroku協統 \n 組員在coppeliasim進行模擬 \n \n 模擬後發現圓盤尺寸有誤且在模擬上很難達到圓盤週期與發球器時間一致，討論是否更改圖 \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '預定進度:修正零件圖、在coppeliasim進行模擬並修正錯誤、準備pdf、製作reavel並分配上台報告內容 \n 繪圖更改 \n 經W7 coppeliasim進行模擬後發現轉盤太小會造成球一樣滾動因此將圓盤直徑加大 \n \n 模擬後發現須將底座挖圓盤軸的洞，不然組合圖放入coppeliasim時會自動視為一體，會導致無法驅動 \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '預定進度:上台報告 \n 2021-協同產品設計實習-stage2-ag5 \n 最終模擬做動還無法讓兩邊的圓盤都呈周期做動，只能兩個發球器旋轉跟一個圓盤轉動 \n \n \n', 'tags': '', 'url': 'W9.html'}, {'title': 'Stage3', 'text': '', 'tags': '', 'url': 'Stage3.html'}, {'title': 'W10', 'text': '將 Stage2 相關資料繳交到\xa0 https://github.com/mdecourse/cd2021/discussions/13 \n 2021-協同產品設計實習-stage2-ag5 倉儲: https://github.com/40823102/stage2-ag5 網站: https://40823102.github.io/stage2-ag5/content/index.html YouTube: (1): https://www.youtube.com/watch?v=fRxebGEGAc0&list=PLXeEyM07M9AASQC80z-jOS8k8wTOXa2NK&index=1 (2): https://www.youtube.com/watch?v=AhB5IT6MZTE&list=PLXeEyM07M9AASQC80z-jOS8k8wTOXa2NK&index=2 (3): https://www.youtube.com/watch?v=Rzcg0QOfQDo&list=PLXeEyM07M9AASQC80z-jOS8k8wTOXa2NK&index=3 (4): https://www.youtube.com/watch?v=g7Oon3LUIpE&list=PLXeEyM07M9AASQC80z-jOS8k8wTOXa2NK&index=4 (5): https://www.youtube.com/watch?v=pCwSe1z1kYg&list=PLXeEyM07M9AASQC80z-jOS8k8wTOXa2NK&index=5 (6): https://youtu.be/TnrDtlSlfd4 PDF: https://40823102.github.io/stage2-ag5/downloads/2021-%E5%8D%94%E5%90%8C%E7%94%A2%E5%93%81%E8%A8%AD%E8%A8%88%E5%AF%A6%E7%BF%92-stage2-ag5.pdf \n 創建Stage3網頁，並各組員進行協統 \n https://40823102.github.io/stage3-ag2/content/index.html \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '\n 啟動 OBS + Youtube 直播\xa0 \n W11簡報 \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '與組員一同針對第十一周所找的資料進行討論，並初步使用軟體INVENTOR繪製停車場簡略概圖 \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '完成stage3停車塔繪圖 \n 模擬車子 \n \n 電梯轉軸 \n \n 電梯承載車子的底 \n \n 設計理念為在車子開進去後轉軸帶動電梯門會轉動到車子要進去的方向，上圖( 電梯承載車子的底)會做上下移動，協助車子上下樓，再藉由轉軸帶動電梯門會轉動到車子要停車或離開的方向 \n \n 小組線上討論直播影片 \n', 'tags': '', 'url': 'W13.html'}]};