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

//选择排序(数据规模越小越好,因为无论什么数据时间复杂度都一样)
//最坏情况: O(n^2), 最好情况[优化后]：O(n^2), 平均时间复杂度: O(n^2); 空间复杂度:O(1)
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