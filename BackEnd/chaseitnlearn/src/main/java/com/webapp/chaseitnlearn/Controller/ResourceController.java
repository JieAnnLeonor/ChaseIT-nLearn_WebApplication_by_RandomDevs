package com.webapp.chaseitnlearn.Controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.webapp.chaseitnlearn.Entity.ResourceEntity;
import com.webapp.chaseitnlearn.Service.ResourceService;


@RestController
@RequestMapping("/resources")
@CrossOrigin(origins = "*")
public class ResourceController {
	@Autowired
    private ResourceService resserv;
	
    @PostMapping("/postResources")
    public ResourceEntity putResources(@RequestParam String r_title, @RequestParam String r_description, 
    		@RequestParam("file") MultipartFile file) 
    		throws IOException {
    				ResourceEntity rEntity = resserv.postResources(r_title, r_description, file);
    				return rEntity;
    }
    
    @GetMapping("/getResourcesById/{r_id}")
	public ResourceEntity getResources(@PathVariable int r_id) throws IOException{
		return resserv.getResources(r_id);
	} 
    
    @GetMapping("/getAllResources")
    public List<ResourceEntity> getAllResources(){
    	return resserv.getAllResources();
    }
    
    @PutMapping("/putResources")
    public ResourceEntity putResources(@RequestParam int r_id, @RequestBody ResourceEntity res) throws Exception{
    	return resserv.putResources(r_id, res);
    }
    
    @PutMapping("/{r_id}/teacher/{teacher_id}")
    public ResourceEntity assignTeacher(@PathVariable int r_id, @PathVariable int teacher_id) throws Exception {
    	return resserv.assignTeacher(r_id, teacher_id);
    }
    
    @DeleteMapping("/deleteResources/{r_id}")
    public String deleteResources(@PathVariable int r_id) throws Exception {
		return resserv.deleteResources(r_id);
	}
}
