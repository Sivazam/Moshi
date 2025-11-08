import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const logo = "https://www.linkpicture.com/q/logo_142.png";

  // Handle dropdown with delay to prevent flickering
  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setIsServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 100); // Small delay to allow moving to dropdown
    setDropdownTimeout(timeout);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Close mobile dropdown when menu is closed
      setIsMobileServicesDropdownOpen(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && event.target === event.currentTarget) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listener to the menu container
    const menuContainer = document.querySelector('.mobile-menu-container');
    if (menuContainer) {
      menuContainer.addEventListener('click', handleClickOutside);
    }

    return () => {
      if (menuContainer) {
        menuContainer.removeEventListener('click', handleClickOutside);
      }
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      children: [
        { name: 'Brand consultancy', path: '/services/brand-consultancy' }
      ]
    },
    { name: 'Clients', path: '/clients' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Always Transparent Navbar - Desktop and Mobile */}
      <nav 
        className="fixed-top w-100 z-50 bg-transparent"
        style={{
          boxShadow: 'none',
        }}
      >
        <div className="container-fluid px-4 px-lg-5">
          <div className="d-flex justify-content-between align-items-center py-3">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-decoration-none"
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={logo}
                alt="Moshi Moshi Logo"
                height="80"
                className="d-inline-block align-top"
                style={{
                  transition: 'transform 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="d-none d-lg-flex align-items-center gap-4">
              {menuItems.map((item) => (
                <div key={item.name} className="position-relative">
                  {item.hasDropdown ? (
                    <div
                      className="services-dropdown-container"
                      style={{
                        position: 'relative',
                      }}
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div
                        className="d-flex align-items-center gap-1 text-decoration-none text-white fw-bold cursor-pointer"
                        style={{
                          fontSize: '1rem',
                          letterSpacing: '0.5px',
                          transition: 'all 0.3s ease',
                          textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                          cursor: 'pointer',
                          paddingBottom: '20px', // Extend hover area
                          paddingTop: '10px',
                          marginBottom: '-20px', // Compensate for padding
                          marginTop: '0px', // Ensure proper alignment
                        }}
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)} // Toggle on click for mobile
                      >
                        <span
                          style={{
                            transition: 'all 0.3s ease',
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.color = '#D4FF00'; // Yellow text on hover
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.color = '#ffffff';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          {item.name}
                        </span>
                        <FaChevronDown 
                          size={12}
                          style={{
                            transition: 'all 0.3s ease',
                          }}
                        />
                      </div>
                      
                      {/* Dropdown Menu */}
                      <div
                        className={`position-absolute bg-dark border border-secondary rounded-3 shadow-lg ${isServicesDropdownOpen ? 'd-block' : 'd-none'}`}
                        style={{
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          minWidth: '220px',
                          marginTop: '0px', // Remove gap
                          zIndex: 1000,
                          backgroundColor: 'rgba(0, 0, 0, 0.95)',
                          backdropFilter: 'blur(10px)',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                        }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="d-block text-decoration-none text-white px-4 py-3 border-bottom border-secondary"
                            style={{
                              fontSize: '0.9rem',
                              fontWeight: '500',
                              transition: 'all 0.3s ease',
                              textTransform: 'uppercase',
                              letterSpacing: '0.5px',
                              color: '#ffffff', // Ensure initial color is white
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.backgroundColor = '#D4FF00';
                              e.currentTarget.style.color = '#000000'; // Black text on yellow background
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#ffffff'; // Back to white
                            }}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-decoration-none text-white fw-bold position-relative"
                      style={{
                        fontSize: '1rem',
                        letterSpacing: '0.5px',
                        transition: 'all 0.3s ease',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = '#D4FF00';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      {item.name}
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '-5px',
                          left: 0,
                          width: 0,
                          height: '2px',
                          backgroundColor: '#D4FF00',
                          transition: 'width 0.3s ease',
                        }}
                        onMouseOver={(e) => {
                          e.target.style.width = '100%';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.width = '0';
                        }}
                      />
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA Buttons */}
              <a
                href="tel:+1234567890"
                className="btn rounded-pill px-3 text-decoration-none"
                style={{
                  backgroundColor: '#FEDDCB',
                  borderColor: '#FEDDCB',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFD4A3';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(254, 221, 203, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#FEDDCB';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Call
              </a>

              <Link
                to="/contact"
                className="btn rounded-pill px-3 text-decoration-none"
                style={{
                  backgroundColor: '#D4FF00',
                  borderColor: '#D4FF00',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#C5E600';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 255, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#D4FF00';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Talk to Experts
              </Link>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              className="d-lg-none btn p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                backgroundColor: '#E3B448', // Mustard color
                border: 'none',
                borderRadius: '8px',
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 10px rgba(227, 180, 72, 0.3)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#D4A035';
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(227, 180, 72, 0.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#E3B448';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(227, 180, 72, 0.3)';
              }}
            >
              {isMobileMenuOpen ? (
                <FaTimes size={20} color="#000" />
              ) : (
                <FaBars size={20} color="#000" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Menu - Full Screen */}
      <div
        className={`mobile-menu-container fixed-top w-100 h-100 d-lg-none ${
          isMobileMenuOpen ? 'd-block' : 'd-none'
        }`}
        style={{
          zIndex: 1040,
        }}
      >
        {/* Full Screen Black Menu Panel */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#000000',
            backgroundImage: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
            transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            overflowY: 'auto',
          }}
        >
          {/* Menu Header with Transparent Background */}
          <div className="d-flex justify-content-between align-items-center p-4" style={{ backgroundColor: 'transparent' }}>
            <img
              src={logo}
              alt="Moshi Moshi Logo"
              height="50"
              className="d-inline-block align-top"
            />
            <button
              className="btn p-2"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                backgroundColor: '#E3B448',
                border: 'none',
                borderRadius: '8px',
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaTimes size={16} color="#000" />
            </button>
          </div>

          {/* Menu Items - Simple Vertical Layout */}
          <div className="d-flex flex-column justify-content-start align-items-start" style={{ padding: '2rem', paddingTop: '4rem' }}>
            {menuItems.map((item, index) => (
              <div key={item.name} style={{ width: '100%' }}>
                {item.hasDropdown ? (
                  <div>
                    <div
                      className="d-flex align-items-center justify-content-between text-decoration-none text-white mb-3"
                      style={{
                        fontSize: '1.8rem',
                        fontWeight: '600',
                        letterSpacing: '2px',
                        transition: 'all 0.3s ease',
                        animationDelay: `${index * 0.1}s`,
                        animation: isMobileMenuOpen ? 'slideInRight 0.5s ease forwards' : 'none',
                        textTransform: 'uppercase',
                        color: '#ffffff',
                        opacity: 0,
                        transform: 'translateX(30px)',
                        cursor: 'pointer',
                      }}
                      onClick={() => setIsMobileServicesDropdownOpen(!isMobileServicesDropdownOpen)}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = '#D4FF00';
                        e.currentTarget.style.transform = 'translateX(10px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span>{item.name}</span>
                      <FaChevronDown 
                        size={16} 
                        style={{
                          transition: 'transform 0.3s ease',
                          transform: isMobileServicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                      />
                    </div>
                    
                    {/* Mobile Dropdown Items - Only show when toggled */}
                    {isMobileServicesDropdownOpen && (
                      <div className="ms-4 mb-4" style={{ paddingLeft: '1rem' }}>
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="d-block text-decoration-none text-white mb-3"
                            style={{
                              fontSize: '1.3rem',
                              fontWeight: '500',
                              letterSpacing: '1px',
                              transition: 'all 0.3s ease',
                              animationDelay: `${(index * 0.1) + (childIndex * 0.05)}s`,
                              animation: isMobileMenuOpen ? 'slideInRight 0.5s ease forwards' : 'none',
                              textTransform: 'capitalize',
                              color: '#ffffff',
                              opacity: 0,
                              transform: 'translateX(30px)',
                            }}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesDropdownOpen(false);
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.color = '#D4FF00';
                              e.currentTarget.style.transform = 'translateX(10px)';
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.color = '#ffffff';
                              e.currentTarget.style.transform = 'translateX(0)';
                            }}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="d-block text-decoration-none text-white mb-4"
                    style={{
                      fontSize: '1.8rem',
                      fontWeight: '600',
                      letterSpacing: '2px',
                      transition: 'all 0.3s ease',
                      animationDelay: `${index * 0.1}s`,
                      animation: isMobileMenuOpen ? 'slideInRight 0.5s ease forwards' : 'none',
                      textTransform: 'uppercase',
                      color: '#ffffff',
                      opacity: 0,
                      transform: 'translateX(30px)',
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#D4FF00';
                      e.currentTarget.style.transform = 'translateX(10px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="mt-5" style={{ width: '100%' }}>
              <a
                href="tel:+1234567890"
                className="btn rounded-pill mb-3 text-decoration-none d-block text-start"
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid #FEDDCB',
                  color: '#FEDDCB',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  padding: '12px 20px',
                  transition: 'all 0.3s ease',
                  width: 'fit-content',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#FEDDCB';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#FEDDCB';
                }}
              >
                REQUEST A QUOTE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}

export default Header;