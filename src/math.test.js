// File to test the math.js unit functions
// Imports
import {it, test,expect} from 'vitest';
// OR
// import {it} from 'vitest';

// Imports components
import {add,sub} from './math';

// Test runner
// Test -- 1
it("adds up two numbers",()=>{
    const result = add(1,2)
    expect(result).toBe(3);
})

// Test --2
it("subtracts up two numbers",()=>{
    const result = sub(1,2)
    expect(result).toBe(-1);
})