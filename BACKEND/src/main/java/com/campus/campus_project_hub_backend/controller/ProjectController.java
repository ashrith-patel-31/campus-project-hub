package com.campus.campus_project_hub_backend.controller;

import com.campus.campus_project_hub_backend.entity.Project;
import com.campus.campus_project_hub_backend.service.ProjectService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:5173")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    // CREATE PROJECT
    @PostMapping
    public ResponseEntity<Project> createProject(
            @RequestBody Project project) {

        Project createdProject =
                projectService.createProject(project);

        return ResponseEntity.ok(createdProject);
    }

    // GET ALL PROJECTS
    @GetMapping
    public ResponseEntity<List<Project>> getAllProjects() {

        List<Project> projects =
                projectService.getAllProjects();

        return ResponseEntity.ok(projects);
    }

    // GET PROJECT BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(
            @PathVariable Long id) {

        return projectService.getProjectById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // UPDATE PROJECT
    @PutMapping("/{id}")
    public ResponseEntity<Project> updateProject(
            @PathVariable Long id,
            @RequestBody Project project) {

        Project updatedProject =
                projectService.updateProject(id, project);

        if (updatedProject == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(updatedProject);
    }

    // DELETE PROJECT
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(
            @PathVariable Long id) {

        boolean deleted =
                projectService.deleteProject(id);

        if (!deleted) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.noContent().build();
    }
}