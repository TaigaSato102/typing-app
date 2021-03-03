`use strict`;
{   
    function setWord(){
        word = words.splice(Math.floor(Math.random() * words.length),1)[0];
        target.textContent = word;
        loc = 0;
    }

    const words = ['taiga',
                   'kaoru',
                   'junnsuke',
                   'kento',
                   'daisuke',
                   'natumi',
                   'kensei',
                   'kanta']

    let word;
    let loc =0;
    let startTime = Date.now();
    const target = document.getElementById('target');
    // word = words[Math.floor(Math.random() * words.length)]
    // target.textContent = word;
    

    document.getElementById('button').addEventListener('click', e =>{
        document.getElementById('button').style.display = "none";
        setWord();
    })

    document.addEventListener('keydown', e =>{
        if (e.key === word[loc] ){
            loc++;

            target.textContent='_'.repeat(loc) + word.substring(loc);
        }

        if(loc === word.length){
            if(words.length === 0){
                const endTime = ((Date.now() - startTime)/1000).toFixed(2);
                const result = document.getElementById('result');
                result.textContent= `Finish! ${endTime}秒です！お疲れ様でした`;
                if(endTime > 20.0){
                    const sub_result = document.getElementById('sub-result');
                    sub_result.textContent = '遅いね！君、営業？';
                }else{
                    const sub_result = document.getElementById('sub-result');
                    sub_result.textContent = '素晴らしい！';
                }
                return;
            }

            setWord();
        }
    });

}