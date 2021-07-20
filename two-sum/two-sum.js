/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map={};
    for(i=0;i<nums.length;i++){
        var num = target - nums[i];
        if(nums[i] in map)
            return [map[nums[i]],i];
        else
            map[num]=i
    }
    
};