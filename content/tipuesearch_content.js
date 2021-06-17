var tipuesearch = {"pages": [{'title': 'About', 'text': "\n 40823102 四設計二甲 劉怡萱 \n 個人倉儲: 40823102 cd2021 \n Youtube: Aasta's channel \n \n", 'tags': '', 'url': 'About.html'}, {'title': 'Stage1', 'text': '', 'tags': '', 'url': 'Stage1.html'}, {'title': 'W1', 'text': '在github建立cd2021倉儲 \n \n 利用git clone 倉儲並將資料複製過去cd2021資料夾後成功架設網頁 \n \n 利用Leo Editor編輯pelican.leo 以建立blog網誌 \n \n 成功 建立blog網誌 \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'W2', 'text': '標題: 2021-協同產品設計實習-stage1-ag5 \n 專題題目:倒車入庫 \n \n 專題 動機:由於最近出門都遇到下雨因此想學開車，也聽到很多會開車的人都說倒車入庫是最難的，所以設計車子倒車入庫 \n 預定第二周進度:繪製零件圖並放入coppeliasim進行色調調整 \n \n 利用繪圖軟體Inventor分別繪製零件圖及組合圖 \n \n \n 將組合圖檔儲存成stl檔後在coppeliasim開啟並進行色調調整 \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'W3', 'text': '預定第三週進度:在coppeliasim進行模擬並修爭錯誤 \n 預定進度:在coppeliasim進行模擬並修爭錯誤 \n Youtube影片: 2021-協同產品設計實習-cd2021 w3 \n \n 分別新增四個軸並先選曲軸再選取對應的車輪Object/Item Translation/Position及Object/Item Rotation/Orientation使兩件方向及位置 \n \n \n 四根軸與車輪設定完成並將被驅動得車輪拖至軸下 \n \n 遇到問題:發現車子不如預期做動 \n \n 發現原因車輪和車身不能貼合才可以做動因此將車輪往外移 \n 對各軸設定速度並完成做動 \n \n \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4', 'text': '第四週預定進度:上台報告 \n \n 2021-協同產品設計實習-stage1-ag5報告書 \n 2021-協同產品設計實習-stage1-ag5影片 \n 各組簡報所花費的時間 \n \n 討論 \n 若檔案數較大應如何若檔案數較大應如何計算各組花費時間? \n 除了手動逐一計算外，透過參考文獻我們發現可用ffprobe來使用外部指令，也就是從FFmpeg Wiki運行以下命令 \n import subprocess\n\ndef get_length(filename):\n    result = subprocess.run(["ffprobe", "-v", "error", "-show_entries",\n                             "format=duration", "-of",\n                             "default=noprint_wrappers=1:nokey=1", filename],\n        stdout=subprocess.PIPE,\n        stderr=subprocess.STDOUT)\n    return float(result.stdout) \n 也可以-printm_format json與-show_streams json一起使用 \n 參考資料: https://stackoverflow.com/questions/3844430/how-to-get-the-duration-of-a-video-in-python \n \n', 'tags': '', 'url': 'W4.html'}, {'title': 'Stage2', 'text': '', 'tags': '', 'url': 'Stage2.html'}, {'title': 'W5', 'text': '這次Stage2的專案，我們討論並決定以Stage1-18未完成的排球扣球練習器改良；原本的主體只有單一的骨架與球軌，我們將改良成雙向作動與作動時間長的機構，讓排球可以順利滑動增加投球效率；並改良夾持的機構，改良成讓球在經圓盤的週期滾動，在球與圓盤的空洞重合後自動掉落 \n 原Stage1-18做動 \n \n 預定每週進度 \n W5 討論專題方向、每週進度 \n W6 繪製零件圖、在coppeliasim進行模擬並修正錯誤 \n W7 \xa0 在coppeliasim進行模擬並修正錯誤、進行Heroku協統 \n W8 修正零件圖、在coppeliasim進行模擬並修正錯誤、準備pdf、製作reavel並分配上台報告內容 \n W9 上台報告 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '預定進度:繪製零件圖、在coppeliasim進行模擬並修正錯誤 \n 在組內分工裡我負責繪圖及協助編輯小組網頁 \n \n 骨架、球軌、接住球的部分 \n \n 轉盤及支撐軸，透過轉盤週期作旋轉動作讓球也成週期落下 \n \n \n 發球器的軸、底座、擊球的轉臂 \n \n 發球器組合圖 \n \n 發球器做動 \n \n 整體組合圖 \n \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W7', 'text': '預定進度: 在coppeliasim進行模擬並修正錯誤、進行Heroku協統 \n 組員在coppeliasim進行模擬 \n \n 模擬後發現圓盤尺寸有誤且在模擬上很難達到圓盤週期與發球器時間一致，討論是否更改圖 \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '預定進度:修正零件圖、在coppeliasim進行模擬並修正錯誤、準備pdf、製作reavel並分配上台報告內容 \n 繪圖更改 \n 經W7 coppeliasim進行模擬後發現轉盤太小會造成球一樣滾動因此將圓盤直徑加大 \n \n 模擬後發現須將底座挖圓盤軸的洞，不然組合圖放入coppeliasim時會自動視為一體，會導致無法驅動 \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W9', 'text': '預定進度:上台報告 \n 2021-協同產品設計實習-stage2-ag5 \n 最終模擬做動還無法讓兩邊的圓盤都呈周期做動，只能兩個發球器旋轉跟一個圓盤轉動 \n \n \n', 'tags': '', 'url': 'W9.html'}, {'title': 'Stage3', 'text': '', 'tags': '', 'url': 'Stage3.html'}, {'title': 'W10', 'text': '將 Stage2 相關資料繳交到\xa0 https://github.com/mdecourse/cd2021/discussions/13 \n 2021-協同產品設計實習-stage2-ag5 倉儲: https://github.com/40823102/stage2-ag5 網站: https://40823102.github.io/stage2-ag5/content/index.html YouTube: (1): https://www.youtube.com/watch?v=fRxebGEGAc0&list=PLXeEyM07M9AASQC80z-jOS8k8wTOXa2NK&index=1 (2): https://www.youtube.com/watch?v=AhB5IT6MZTE&list=PLXeEyM07M9AASQC80z-jOS8k8wTOXa2NK&index=2 (3): https://www.youtube.com/watch?v=Rzcg0QOfQDo&list=PLXeEyM07M9AASQC80z-jOS8k8wTOXa2NK&index=3 (4): https://www.youtube.com/watch?v=g7Oon3LUIpE&list=PLXeEyM07M9AASQC80z-jOS8k8wTOXa2NK&index=4 (5): https://www.youtube.com/watch?v=pCwSe1z1kYg&list=PLXeEyM07M9AASQC80z-jOS8k8wTOXa2NK&index=5 (6): https://youtu.be/TnrDtlSlfd4 PDF: https://40823102.github.io/stage2-ag5/downloads/2021-%E5%8D%94%E5%90%8C%E7%94%A2%E5%93%81%E8%A8%AD%E8%A8%88%E5%AF%A6%E7%BF%92-stage2-ag5.pdf \n 創建Stage3網頁，並各組員進行協統 \n https://40823102.github.io/stage3-ag2/content/index.html \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '\n 啟動 OBS + Youtube 直播\xa0 \n W11簡報 \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '與組員一同針對第十一周所找的資料進行討論，並初步使用軟體INVENTOR繪製停車場簡略概圖 \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '完成stage3停車塔繪圖 \n 模擬車子 \n \n 電梯轉軸 \n \n 電梯承載車子的底 \n \n 設計理念為在車子開進去後轉軸帶動電梯門會轉動到車子要進去的方向，上圖( 電梯承載車子的底)會做上下移動，協助車子上下樓，再藉由轉軸帶動電梯門會轉動到車子要停車或離開的方向 \n \n 小組線上討論直播影片 \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '建立gitlab \n 搜尋 gitlab sign up 選GitLab.com account \n \n \n 輸入資料並建立帳號 \n 個人資料輸入完後選SSH Keys \n \n 打開puttygen.exe選load選取檔案 \n \n \n 複製紅框內容在網頁貼上 \n \n \n 在編輯器開啟tmp/cd2021/.git/config修改 並推送 \n \n \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': "\n 影片翻譯: \n We saw this simple two-link robot in the previous lecture about forword kinematics. \n 我們在上一堂關於正向向運動學的講座中看到了這個簡單的雙連桿機器人。 \n The tooltip pose of this robot is described simple by two numbers, the coordinates x and y with respect to the world coordinate frame. \n 該機器人的工具提示姿態由兩個數字簡單描述，即相對於世界坐標系的坐標 x 和 y。 So, the problem here is that given x and y, we want to determine the joined angles, Q1 and Q2. 因此，這裡的問題是給定 x 和 y，我們要確定連接角 Q1 和 Q2。 The solution that we're going to follow in this particular section is a geometric one. 在這一節中，我們要遵循的解決方法是運用幾何。 \n We're going to start with a simple piece of construction.\xa0 \n 我們將從一個簡單的構造開始。 \n We're going to overlay the red triangle on top of our robot. \n 我們要把紅色三角形覆蓋在我們的機器人上面。 \n We know that the end point coordinate is x, y, so the vertical height of the triangle is y, the horizontal width is x. \n 我們知道終點坐標是x，y，所以三角形的垂直高度是y，水平寬度是x。 And, using Pythagoras theorem, we can write r squared equals x squared plus y squared. \n 利用畢氏定理，我們可以寫出r的平方等於x的平方加y的平方。 \n So far, so easy. \n 到目前為止，很容易。 \n Now, we're going to look at this triangle highlighted here in red and we want to determine the angle alpha. \n 現在，我們看此處以紅色突出顯示的三角形，我們要確定角度 α角。 \n In order do that, We need to use the cosine rule. \n 為了做到這一點，我們需要使用餘弦規則。 \n And, if you're a little rusty on the cosine rule, here is a bit of a refresher. \n 如果你對餘弦規則有點生疏，這裡有一點複習。 \n We have an arbitrary triangle. \n 我們有一個任意三角形。 \n We don‘t have to have any right angles in it and then we're going to label the length of this edge as A and the angle opposite that edge, we’re going to label as little a. \n 我們不必在其中有任何直角，然後我們將這條邊的長度標記為 A，而與該邊相對的角度，我們將標記為小 a。 \n And, we do the same for this edge and this angle, and this edge and this angle. \n 然後，我們對這條邊和這個角，以及這條邊和這個角做同樣的事情。 \n So all together, the sides are labelled capitals A,B and C, and the angles are labelled little a, little b, and little c. \n 因此，所有邊都標記為大寫字母 A,B 和 C，角標記為小 a、小 b 和小 c。 \n So the cosine rule is simply this relationship here. \n \n 所以餘弦規則就是這裡的這種關係。 It's a big like Pythagoras’ theorem expect for this extra term on the end with the cos a in it. \n \n 就像畢氏定理一樣，只是最後多了一個 cos a的項。 \n Now, let’s apply the cosine rule to the particular triangle we looked at a moment ago. \n 現在，讓我們將餘弦規則應用於我們剛才看到的特定三角形。 \n It’s pretty straightforward to write down this particular relationship. \n 寫下這種特殊關係非常簡單。 We can isolate the term cos which gives us the angle α we're interested in. \n 我們可以分離出 cos 項，它給出了我們感興趣的角度 α。 And, it's defined in terms of the constact link lengths, A1 and A2 an the the position of the end effector, x and y. 而且，它是根據固定連桿長度 A1 和 A2 以及末端執行器的位置 x 和 y 定義的。 We can make this simpler relationship between the angles α and the Q2. \n 我們可以在角度 α 和 Q2 之間建立更簡單的關係。 And, we know from the shape of the cosine function that cos of Q2 must be equal to negative of cos α. \n 而且，我們從餘弦函數的形狀知道，Q2 的 cos 必須等於 cos α 的負值。 This time, let’s just write an expression for the cosine of the jointed angle Q2. 這一次，我們只寫出聯接角Q2的餘弦表達式。 Now, we're going to draw yes another red triangle and we're going apply some simple trigonometry here. \n 現在，我們要畫出是的另一個紅色三角形，我們要在這裡應用一些簡單的三角函數。 If we know Q2, then we know this lengh and this length of the red triangle. 如果我們知道 Q2，那麼我們就知道紅色三角形的這個長度和這個長度。 We can write this relationship for the sine of the joinded angle Q2. \n 我們可以為連接角 Q2 的正弦寫出這種關係。 Now, we can consider a bigger triangle whose angle is β and this side length of the triangle is given here in blue. 現在，我們可以考慮一個更大的三角形，它的角度是β，這個邊長的 三角形的邊長在這裡用藍色表示。 And, the length of the other side of triangle is this. 還有，三角形的另一邊的長度是這樣的。 So, now we can write an expression for the angle β in terms of these parameters here. 所以，現在我們可以根據這些參數寫出角度 β 的表達式。 Going back to the red triangle that we drew earlier, we can establish a relationship between the Q1 and angle β. \n 回到我們之前畫的紅色三角形，我們可以建立 Q1 和角度 β 之間的關係。 Introduce yet another angle, this one γ and we can write a relationship between the angle γ and tooltip coordinates x and y.  引入另一個角度，這個角度 γ，我們可以寫出角度 γ 與工具提示坐標 x 和 y 之間的關係。 Now, We can write a simple relationship between the angles that we've constructed, γ and β and the joined angle we're interested in which is Q1. \n 現在，我們可以寫出我們構建的角度 γ 和 β 與我們感興趣的連接角 Q1 之間的簡單關係。 And, the total relationship looks something like this. \n 而且，整個關係看起來像這樣。 Quite a complex relationship, it gives us the angle of joined one, that’s Q1 in terms of the end effector coordinates y and x ,and a bunch of constants, a1 and a2, and it's also a function of the second joint angle, Q2. 這是一個相當複雜的關係，它給了我們一個連接的角度，即Q1，以末端效應器的坐標y和x，以及一堆常數a1和a2來表示，它也是第二個連接角度的函數， Q2。 So let’s summarize what it is that we have the derived here. \n 所以讓我們總結一下我們在這裡得到的推導了什麼。 We have an expression for the cosine of Q2 and we have an expression for Q1. \n 我們有 Q2 的餘弦表達式和 Q1 的表達式。 Now, the cosine function is symmetrical about 0. \n 現在，餘弦函數關於 0 對稱。 So, if we know the value of the cosine of Q2, then there are two possible solutions, a positive angle and a negative angle. \n 所以，如果我們知道 Q2 的餘弦值，那麼有兩種可能的解，一個正角和一個負角。 We're going to explicitly choose the positive angle, which means that I can write this expression here.  \n 我們將明確選擇正角，這意味著我可以在這裡寫這個表達式。 And now, we have what we call the inverse kinematic solution for this two-link robot. 現在，我們有了這個雙連桿機器人的逆運動學解決方案。 We have an expression for the two joined angles, Q1 and Q2 in terms of the end effector pose x and the y, and a bunch of constacts. 我們有一個兩個連接角的表達式，Q1和Q2與末端效應器的姿勢x和y有關，還有一堆常數。 You notice that the two equations are not independent. \n 你注意到這兩個方程式不是獨立的。 The equation for Q1, in fect, depends on the solution for Q2. Q1 的方程實際上取決於 Q2 的解。 In this case, Q2 is negative and we're going to write the solution for Q2 with a negative sign in front of the inverse cosine. \n 在這種情況下，Q2是負數，我們要在反餘弦前面加上負號，寫出Q2的解。 \n Now, we need to solve for Q1, so we're going to introduce this particular and triangle,the angle β that we solved previously, and the angle γ which is defined in terms of y and x. 現在，我們需要求解Q1，所以我們要引入這個特殊的和三角形,我們之前求解的角度β，以及用y和x定義的角度γ。 Now, we write a slightly different relationship between Q1, γ and β different to what we had before. \n 現在，我們寫出 Q1、γ 和 β 之間的關係與我們之前的關係略有不同。 There’s a change of sign involved. 在這裡涉及到符號的變化。 Then, we can substitue all that previous equation and come up with this expression for Q1. 然後，我們可以代入之前的所有方程，並得出 Q1 的這個表達式。 Again, there is a change of sign here. \n 同樣，這裡的符號發生了變化。 Previously, this was a negative sign. 以前，這是一個負號。 And, here summary from is the solution for the inverse kinematics our two-link robot when it is in this particular configuration, where Q2 is negative. \n 並且，這裡的總結是我們的雙連桿機器人處於這種特定配置時的逆運動學解決方案，其中 Q2 為負。 Let’s compare the two solutions, the case where Q2 is positive and the case where Q2 is negative. 讓我們比較一下這兩種解決方案，即Q2為正的情況和Q2為負的情況。 結果: \n", 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': 'Onshape 零組件繪製 \n Onshape 檔案連結 \n 操作影片 \n \n \n 建立 CoppeliaSim 4.1.0 MTB robot 場景 \n 檔案連結 \n 操作影片 \n \n 手臂末端加入 components-gripper-suction pad 吸盤 \n 檔案連結 \n 操作應片 \n \n 逆向運動學函式 \n 檔案連結 \n \n', 'tags': '', 'url': 'W16.html'}]};