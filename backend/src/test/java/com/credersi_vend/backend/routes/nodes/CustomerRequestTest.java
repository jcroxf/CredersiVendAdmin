package com.credersi_vend.backend.routes.nodes;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.util.UUID;

import org.junit.jupiter.api.Test;



public class CustomerRequestTest{
	@Test
	void test1() {
		CustomerRequest CR = new CustomerRequest();
		
		CR.setName("Bob");
		String check = CR.getName();
		
		assertTrue(check == "Bob");
		
	}
	
//	@Test
//	void test2() {
//		CustomerRequest CR = new CustomerRequest();
//		
//		CR.setUuid(677db88f-5e0a-406f-b65b-b3b5a5b60ab0);
//		UUID check = CR.getUuid();
//		
//		assertTrue(check == 677db88f-5e0a-406f-b65b-b3b5a5b60ab0);
//		
//	}
}
