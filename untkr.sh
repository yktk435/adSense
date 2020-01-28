#!/bin/bash


#検索する
path='dal'

min=30
#パスのアクセス日取得
file_atime=`stat -c "%Y" $path`

#現在時刻所得
now=`date "+%s"`

#経過時間の計算
diff=$(((now-file_atime)/60))

echo $diff
#出力
echo $(($diff/60))分

if test $min -lt $diff; then
	#30分経っていたら
	echo "30分経ってるからメール飛ばします。"
	echo $diff"分前に更新されてる"
else
	echo "正常"
	echo $diff"分前に更新されてる"
fi
