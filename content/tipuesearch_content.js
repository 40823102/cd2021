var tipuesearch = {"pages": [{'title': 'About', 'text': "\n 40823102 四設計二甲 劉怡萱 \n 個人倉儲: 40823102 cd2021 \n Youtube: Aasta's channel \n \n", 'tags': '', 'url': 'About.html'}, {'title': 'Stage1', 'text': '', 'tags': '', 'url': 'Stage1.html'}, {'title': 'W1', 'text': '在github建立cd2021倉儲 \n \n 利用git clone 倉儲並將資料複製過去cd2021資料夾後成功架設網頁 \n \n 利用Leo Editor編輯pelican.leo 以建立blog網誌 \n \n 成功 建立blog網誌 \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '標題: 2021-協同產品設計實習-stage1-ag5 \n 專題題目:倒車入庫 \n \n 專題 動機:由於最近出門都遇到下雨因此想學開車，也聽到很多會開車的人都說倒車入庫是最難的，所以設計車子倒車入庫 \n 預定第二周進度:繪製零件圖並放入coppeliasim進行色調調整 \n \n 利用繪圖軟體Inventor分別繪製零件圖及組合圖 \n \n \n 將組合圖檔儲存成stl檔後在coppeliasim開啟並進行色調調整 \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '預定第三週進度:在coppeliasim進行模擬並修爭錯誤 \n 預定進度:在coppeliasim進行模擬並修爭錯誤 \n Youtube影片: 2021-協同產品設計實習-cd2021 w3 \n \n 分別新增四個軸並先選曲軸再選取對應的車輪Object/Item Translation/Position及Object/Item Rotation/Orientation使兩件方向及位置 \n \n \n 四根軸與車輪設定完成並將被驅動得車輪拖至軸下 \n \n 遇到問題:發現車子不如預期做動 \n \n 發現原因車輪和車身不能貼合才可以做動因此將車輪往外移 \n 對各軸設定速度並完成做動 \n \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '第四週預定進度:上台報告 \n \n 2021-協同產品設計實習-stage1-ag5報告書 \n 2021-協同產品設計實習-stage1-ag5影片 \n 各組簡報所花費的時間 \n \n 討論 \n 若檔案數較大應如何若檔案數較大應如何計算各組花費時間? \n 除了手動逐一計算外，透過參考文獻我們發現可用ffprobe來使用外部指令，也就是從FFmpeg Wiki運行以下命令 \n import subprocess\n\ndef get_length(filename):\n    result = subprocess.run(["ffprobe", "-v", "error", "-show_entries",\n                             "format=duration", "-of",\n                             "default=noprint_wrappers=1:nokey=1", filename],\n        stdout=subprocess.PIPE,\n        stderr=subprocess.STDOUT)\n    return float(result.stdout) \n 也可以-printm_format json與-show_streams json一起使用 \n 參考資料: https://stackoverflow.com/questions/3844430/how-to-get-the-duration-of-a-video-in-python \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'Stage2', 'text': '', 'tags': '', 'url': 'Stage2.html'}, {'title': 'W5', 'text': '這次Stage2的專案，我們討論並決定以Stage1-18未完成的排球扣球練習器改良；原本的主體只有單一的骨架與球軌，我們將改良成雙向作動與作動時間長的機構，讓排球可以順利滑動增加投球效率；並改良夾持的機構，改良成讓球在經圓盤的週期滾動，在球與圓盤的空洞重合後自動掉落 \n 原Stage1-18做動 \n \n', 'tags': '', 'url': 'W5.html'}]};