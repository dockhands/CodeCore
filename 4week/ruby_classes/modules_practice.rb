class Apple
    def abc
      'ABC method'
    end
  end
  
  # this `opens` the Apple class and adds or modifies methods inside it
  # this is sometime called `monkey patching`
  # it can even be done for classes that come with Ruby like String or Array
  class Apple
    def xyz
      'XYZ method'
    end
  end