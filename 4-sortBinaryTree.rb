# return the array containing the tree levels, from root to last level.

def tree_by_levels(node)
  if node == nil 
    return []
  end
  queue = [node]
  output = []
  
  while queue.length > 0 do
    current = queue.shift
    output.push(current.value)
    if current.left
      queue.push(current.left) 
    end
    if current.right
      queue.push(current.right)
    end
  end
  return output
end
