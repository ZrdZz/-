//冒泡排序
//最坏情况: O(n^2), 最好情况[优化后]：O(n), 平均时间复杂度: O(n^2); 空间复杂度:O(1)
function bubbleSort(arr){
	for(let i = 0, len = arr.length; i < len; i++){
		for(let j = 0; j < len - i - 1; j++){
			if(arr[j] > arr[j + 1]){
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr
}

//改进
// function bubbleSort(arr){
// 	for(let i = 0, len = arr.length; i < len; i++){
// 		var flag = false;
// 		for(let j = 0; j < len - i - 1; j++){
// 			if(arr[j] > arr[j + 1]){
// 				let temp = arr[j];
// 				arr[j] = arr[j + 1];
// 				arr[j + 1] = temp;
// 				flag = true;
// 			}
// 		}
// 		if(flag === false){
// 			return;
// 		}
// 	}
// 	return arr	
// }

//快速排序
//选择一个基准,和基准比较将数据分为两部分,然后分别递归调用
function quickSort(arr){
	if(arr.length <= 1){
		return arr;
	}
	var middle = Math.floor(arr.length / 2),
		pivot = arr.splice(middle, 1)[0],
		left = [],
		right = [];
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < pivot){
			left.push(arr[i])
		}else{
			right.push(arr[i])
		}
	}
	return quickSort(left).concat(pivot, quickSort(right));
}

//选择排序(数据规模越小越好,因为无论什么数据时间复杂度都一样)
//最坏情况: O(n^2), 最好情况：O(n^2), 平均时间复杂度: O(n^2); 空间复杂度:O(1)
function selectionSort(arr){
	var minIndex, temp;
	for(let i = 0, len = arr.length; i < len - 1; i++){
		minIndex = i;
		for(let j = i + 1; j < len; j++){
			if(arr[minIndex] > arr[j]){
				//将最小数的索引保存
				minIndex = j;
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr
}

//插入排序
//最坏情况: O(n^2), 最好情况：O(n), 平均时间复杂度: O(n^2); 空间复杂度:O(1)
function insertionSort(arr){
	for(let i = 1, len = arr.length; i < len; i++){
		var key = arr[i],
			j = i - 1;
		//将要排序的数与前面排好的进行比较
		while(arr[j] > key){
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = key;
	}
	return arr
}

//改进
//查找插入位置时使用二分查找
// function insertionSort(arr){
//     for(let i = 1, len = arr.length; i < len; i++){
//         var key = arr[i],
//             left = 0,
//             right = i - 1;
//         while(left <= right){
//             var middle = Math.floor((left + right) / 2);
//             if(key < arr[middle]){
//                 right = middle - 1;
//             }else{
//                 left = middle + 1; 
//             }
//         }
//         for(let j = i - 1; j >= left; j--){
//             arr[j + 1] = arr[j];
//         }
//         arr[left] = key;
//     }
//     return arr  
// }

//希尔排序
//在插入排序中,对几乎排好序的数组效率很高,希尔排序就是先使数组基本有序再使用插入排序
//在数组中采用跳跃式分组,然后分组进行插入排序,然后逐步缩小增量,继续分组进行插入排序,直至增量为1
//这样使整个数组达到基本有序,到增量为1时,只需做一些微调
function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;

    //动态定义间隔序列
    while(gap < len/5) {
    	//gap加1保证下面除以5后最后剩余1     
        gap =gap*5+1;
    }
    for (gap; gap > 0; gap = Math.floor(gap/5)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];
            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}