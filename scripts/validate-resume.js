#!/usr/bin/env node

/**
 * Simple validation script for resume.yaml
 * Run with: node scripts/validate-resume.js
 */

import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

const RESUME_PATH = path.join(process.cwd(), 'public', 'resume.yaml')

function validateResumeStructure(data) {
  const errors = []

  // Check required sections
  const requiredSections = [
    'experience',
    'education',
    'skills',
    'certifications',
  ]
  for (const section of requiredSections) {
    if (!data[section] || !Array.isArray(data[section])) {
      errors.push(`Missing or invalid '${section}' section`)
    }
  }

  // Validate experience entries
  if (data.experience && Array.isArray(data.experience)) {
    data.experience.forEach((exp, index) => {
      const requiredFields = ['position', 'company', 'duration']
      requiredFields.forEach(field => {
        if (!exp[field]) {
          errors.push(`Experience entry ${index + 1} missing '${field}'`)
        }
      })
    })
  }

  // Validate education entries
  if (data.education && Array.isArray(data.education)) {
    data.education.forEach((edu, index) => {
      const requiredFields = ['degree', 'institution', 'duration']
      requiredFields.forEach(field => {
        if (!edu[field]) {
          errors.push(`Education entry ${index + 1} missing '${field}'`)
        }
      })
    })
  }

  // Validate certification entries
  if (data.certifications && Array.isArray(data.certifications)) {
    data.certifications.forEach((cert, index) => {
      const requiredFields = ['title', 'issuer', 'year']
      requiredFields.forEach(field => {
        if (!cert[field]) {
          errors.push(`Certification entry ${index + 1} missing '${field}'`)
        }
      })
    })
  }

  return errors
}

try {
  console.log('🔍 Validating resume.yaml...')

  // Check if file exists
  if (!fs.existsSync(RESUME_PATH)) {
    console.error('❌ Error: resume.yaml not found at', RESUME_PATH)
    process.exit(1)
  }

  // Read and parse YAML
  const yamlContent = fs.readFileSync(RESUME_PATH, 'utf8')
  const data = yaml.load(yamlContent)

  // Validate structure
  const errors = validateResumeStructure(data)

  if (errors.length === 0) {
    console.log('✅ resume.yaml is valid!')
    console.log(`   - ${data.experience?.length || 0} experience entries`)
    console.log(`   - ${data.education?.length || 0} education entries`)
    console.log(`   - ${data.skills?.length || 0} skills`)
    console.log(`   - ${data.certifications?.length || 0} certifications`)
  } else {
    console.log('❌ Validation errors found:')
    errors.forEach(error => console.log(`   - ${error}`))
    process.exit(1)
  }
} catch (error) {
  console.error('❌ Error validating resume.yaml:', error.message)
  process.exit(1)
}
