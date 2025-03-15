'use client';

import { Box, Container, Typography, Paper, Grid, Chip, Rating, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { Language, Interest, SkillSection, Education, Experience, SkillItem } from '@/lib/data';
import { languages, interests, skills, education, experience } from '@/lib/data';
import PageTransition from '@/components/PageTransition';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: '24px',
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.05)'
    : 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  boxShadow: theme.palette.mode === 'dark'
    ? '0 20px 40px rgba(0, 0, 0, 0.4)'
    : '0 20px 40px rgba(0, 0, 0, 0.1)',
}));

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: 'transparent',
  borderRadius: '16px !important',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: theme.spacing(1, 0),
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 10px 20px rgba(0, 0, 0, 0.3)'
      : '0 10px 20px rgba(0, 0, 0, 0.1)',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  borderRadius: '16px',
  transition: 'all 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
  '&.Mui-expanded': {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    transition: 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
  },
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: '12px',
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 4px 8px rgba(0, 0, 0, 0.3)'
      : '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
}));

const sortByDate = <T extends { startDate: number | string; endDate?: number | string | null }>(items: T[]): T[] => {
  return [...items].sort((a, b) => {
    const aEnd = a.endDate || new Date().getFullYear();
    const bEnd = b.endDate || new Date().getFullYear();
    return Number(bEnd) - Number(aEnd);
  });
};

export default function ResumePage() {
  const sortedExperience = sortByDate(experience);
  const sortedEducation = sortByDate(education);
  const theme = useTheme();

  const sectionHeaderStyle = {
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(to right, #fff, rgba(255, 255, 255, 0.7))'
      : 'linear-gradient(to right, #000, rgba(0, 0, 0, 0.7))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    mb: 3,
  };

  return (
    <PageTransition>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <StyledPaper sx={{ p: { xs: 3, md: 4 } }}>
          {/* Languages Section */}
          <Typography variant="h4" sx={sectionHeaderStyle}>
            Languages
          </Typography>
          <Box sx={{ mb: 6 }}>
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 1.5 
            }}>
              {languages?.map((lang: Language, index: number) => (
                <StyledChip 
                  key={index}
                  label={`${lang.name} - ${lang.level}`} 
                  color="primary" 
                  variant="outlined"
                />
              ))}
            </Box>
          </Box>

          {/* Skills Section */}
          <Typography variant="h4" sx={sectionHeaderStyle}>
            Skills
          </Typography>
          <Box sx={{ mb: 6 }}>
            {skills?.map((section: SkillSection, index: number) => (
              <StyledPaper 
                key={index} 
                sx={{ 
                  mb: 3,
                  overflow: 'hidden',
                  bgcolor: 'transparent',
                }}
              >
                <Box sx={{ 
                  p: 2, 
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
                    : 'linear-gradient(45deg, rgba(0,0,0,0.05), rgba(0,0,0,0.02))',
                  backdropFilter: 'blur(10px)',
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {section.section}
                  </Typography>
                </Box>
                <Box sx={{ 
                  p: 3,
                  display: 'grid', 
                  gap: 2, 
                  gridTemplateColumns: {
                    xs: 'repeat(auto-fill, minmax(250px, 1fr))',
                  },
                }}>
                  {section.items.map((skill: SkillItem, skillIndex: number) => (
                    <Box 
                      key={skillIndex} 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        gap: 2,
                        p: 1.5,
                        borderRadius: 2,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.05)'
                            : 'rgba(0, 0, 0, 0.02)',
                          transform: 'translateX(4px)',
                        }
                      }}
                    >
                      <Typography sx={{ fontWeight: 500 }}>
                        {skill.name}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 1,
                        color: theme.palette.primary.main,
                      }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            minWidth: '2rem',
                            fontWeight: 600,
                          }}
                        >
                          {skill.experience}y
                        </Typography>
                        <Rating 
                          value={skill.experience / 2} 
                          readOnly 
                          precision={0.5}
                          size="small"
                        />
                      </Box>
                    </Box>
                  ))}
                </Box>
              </StyledPaper>
            ))}
          </Box>

          {/* Experience Section */}
          <Typography variant="h4" sx={sectionHeaderStyle}>
            Experience
          </Typography>
          <Box sx={{ mb: 6 }}>
            {sortedExperience?.map((exp: Experience, index: number) => (
              <StyledAccordion key={index} sx={{ mb: 2 }}>
                <StyledAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    width: '100%',
                    gap: { xs: 1, sm: 2 },
                  }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {exp.position}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {exp.companyName}
                      </Typography>
                    </Box>
                    <Box sx={{ 
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      alignItems: { xs: 'flex-start', sm: 'center' },
                      gap: 1
                    }}>
                      <StyledChip
                        size="small"
                        label={`${exp.startDate} - ${exp.endDate || 'Present'}`}
                        color="primary"
                        variant="outlined"
                      />
                      <StyledChip
                        size="small"
                        label={exp.country}
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                </StyledAccordionSummary>
                <AccordionDetails sx={{ p: 3 }}>
                  {exp.description.summary.map((sum: string, sumIndex: number) => (
                    <Typography 
                      key={sumIndex} 
                      paragraph
                      sx={{ 
                        color: theme.palette.text.secondary,
                        '&:last-child': { mb: 3 }
                      }}
                    >
                      {sum}
                    </Typography>
                  ))}
                  {exp.description.responsibilities.length > 0 && (
                    <>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        Key Responsibilities:
                      </Typography>
                      <Box component="ul" sx={{ 
                        pl: 2,
                        '& li': {
                          mb: 1,
                          color: theme.palette.text.secondary,
                        }
                      }}>
                        {exp.description.responsibilities.map((resp: string, respIndex: number) => (
                          <li key={respIndex}>
                            <Typography>{resp}</Typography>
                          </li>
                        ))}
                      </Box>
                    </>
                  )}
                </AccordionDetails>
              </StyledAccordion>
            ))}
          </Box>

          {/* Education Section */}
          <Typography variant="h4" sx={sectionHeaderStyle}>
            Education
          </Typography>
          <Box sx={{ mb: 6 }}>
            {sortedEducation?.map((edu: Education, index: number) => (
              <StyledAccordion key={index} sx={{ mb: 2 }}>
                <StyledAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    width: '100%',
                    gap: { xs: 1, sm: 2 },
                  }}>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {edu.name}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {edu.qualification}
                      </Typography>
                      {edu.specialization && (
                        <Typography variant="body2" color="text.secondary">
                          {edu.specialization}
                        </Typography>
                      )}
                    </Box>
                    <StyledChip
                      size="small"
                      label={`${edu.startDate} - ${edu.endDate}`}
                      color="primary"
                      variant="outlined"
                    />
                  </Box>
                </StyledAccordionSummary>
                <AccordionDetails sx={{ p: 3 }}>
                  {edu.description.map((desc, i) => (
                    <Typography 
                      key={i} 
                      paragraph
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      {desc}
                    </Typography>
                  ))}
                </AccordionDetails>
              </StyledAccordion>
            ))}
          </Box>

          {/* Interests Section */}
          <Typography variant="h4" sx={sectionHeaderStyle}>
            Interests
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {interests?.map((interest: Interest, index: number) => (
              <StyledChip
                key={index}
                label={interest.name}
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>
        </StyledPaper>
      </Container>
    </PageTransition>
  );
} 