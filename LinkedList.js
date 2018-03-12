/**
 *  创建链表节点
 *  @param {*} value 节点值 
 */
function Node(value){
    this.value = value;
    this.next = null;
}

/**
 * 创建链表
 * @param {*} value 链表头结点的值
 */
function LinkedList(value){
    this.head = new Node(value);
    this.length = 1;
}

LinkedList.prototype = {
    constructor: LinkedList,

    /**
     * 向链表尾部添加一个新的节点
     * @param {*} value 添加节点的值
     */
    append: function(value){
        let current = this.head;

        while(current.next !== null){
            current = current.next;
        }

        current.next = new Node(value);
        this.length++;
    },

    /**
     * 向链表中插入节点
     * @param {*} value 插入节点的值
     * @param {number} index 插入节点的序号, 默认为链表最后一个节点
     */
    insert: function(value, index = this.length){
        if(index <= this.length && index >= 0){
            let pre = this.head,
                cur = pre.next;

            while(index > 1){
                pre = pre.next;
                cur = cur.next;
                index--;
            }

            let newNode = new Node(value);
            pre.next = newNode;
            newNode.next = cur;
            this.length++;
        }else{
            console.log('出界啦!')
        }
    },

    /**
     * 删除节点
     * @param {number} index 删除节点的序号, 默认为链表的最后一个节点
     */
    remove: function(index = this.length - 1){
        if(index < this.length && index >= 0){
            let pre = this.head,
                cur = pre.next;

            while(index > 1){
                pre = pre.next;
                cur = cur.next;
                index--;
            }

            pre.next = cur.next;
            cur.next = null;
            this.length--;
        }else{
            console.log('出界啦!')
        }
    },

    /**
     * 查找指定节点
     * @param {*} value 查找的节点值
     */
    find: function(value){
        let current = this.head;

        while(current.value !== value){
            current = current.next;
            if(current === null){
                console.log('无指定值');
                return
            }
        }

        return current;

    },

    /**
     * 输出链表节点值
     */
    display: function(){
        let current = this.head,
            result = [current.value];

        while(current.next !== null){
            result.push(current.next.value);
            current = current.next;
        }
        return result
    },

    /**
     * 链表长度
     */
    getLength: function(){
        return this.length;
    }
}






