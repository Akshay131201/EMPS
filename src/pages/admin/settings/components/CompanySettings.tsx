import { companyProfileData, workingHoursData, holidaysData } from '../data/settingsData'

const CompanySettings = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* Company Profile */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '20px' }}>
          Company Profile
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <div>
            <label style={{ fontSize: '13px', color: '#666', marginBottom: '8px', display: 'block' }}>
              Company Name
            </label>
            <input
              type="text"
              value={companyProfileData.name}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
                fontSize: '14px',
                outline: 'none',
                transition: 'all 0.15s ease'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#1a1a1a'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
            />
          </div>

          <div>
            <label style={{ fontSize: '13px', color: '#666', marginBottom: '8px', display: 'block' }}>
              Email
            </label>
            <input
              type="email"
              value={companyProfileData.email}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
                fontSize: '14px',
                outline: 'none',
                transition: 'all 0.15s ease'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#1a1a1a'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
            />
          </div>

          <div>
            <label style={{ fontSize: '13px', color: '#666', marginBottom: '8px', display: 'block' }}>
              Phone
            </label>
            <input
              type="tel"
              value={companyProfileData.phone}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
                fontSize: '14px',
                outline: 'none',
                transition: 'all 0.15s ease'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#1a1a1a'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
            />
          </div>

          <div>
            <label style={{ fontSize: '13px', color: '#666', marginBottom: '8px', display: 'block' }}>
              Website
            </label>
            <input
              type="url"
              value={companyProfileData.website}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
                fontSize: '14px',
                outline: 'none',
                transition: 'all 0.15s ease'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#1a1a1a'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
            />
          </div>

          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ fontSize: '13px', color: '#666', marginBottom: '8px', display: 'block' }}>
              Address
            </label>
            <textarea
              value={companyProfileData.address}
              rows={3}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: '8px',
                border: '1px solid #e5e5e5',
                fontSize: '14px',
                outline: 'none',
                fontFamily: 'inherit',
                resize: 'vertical',
                transition: 'all 0.15s ease'
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#1a1a1a'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e5e5'}
            />
          </div>
        </div>

        <div style={{ marginTop: '20px' }}>
          <label style={{ fontSize: '13px', color: '#666', marginBottom: '8px', display: 'block' }}>
            Company Logo
          </label>
          <div style={{
            padding: '40px',
            border: '2px dashed #e5e5e5',
            borderRadius: '12px',
            textAlign: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#1a1a1a'
            e.currentTarget.style.backgroundColor = '#fafafa'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e5e5e5'
            e.currentTarget.style.backgroundColor = 'transparent'
          }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>📤</div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a', marginBottom: '4px' }}>
              Click to upload logo
            </div>
            <div style={{ fontSize: '13px', color: '#999' }}>
              PNG, JPG up to 5MB
            </div>
          </div>
        </div>

        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            background: '#1a1a1a',
            color: '#fff',
            fontWeight: 500,
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
        >
          Save Changes
        </button>
      </div>

      {/* Working Hours */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '20px' }}>
          Working Hours
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {Object.entries(workingHoursData).map(([day, hours]) => (
            <div key={day} style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr 1fr 100px',
              gap: '16px',
              alignItems: 'center',
              padding: '12px',
              background: '#fafafa',
              borderRadius: '8px'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a', textTransform: 'capitalize' }}>
                {day}
              </div>
              <input
                type="time"
                value={hours.start}
                disabled={!hours.isWorkingDay}
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #e5e5e5',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <input
                type="time"
                value={hours.end}
                disabled={!hours.isWorkingDay}
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #e5e5e5',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={hours.isWorkingDay}
                  style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '13px', color: '#666' }}>Active</span>
              </label>
            </div>
          ))}
        </div>

        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            background: '#1a1a1a',
            color: '#fff',
            fontWeight: 500,
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
        >
          Save Working Hours
        </button>
      </div>

      {/* Holidays */}
      <div style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: '12px',
        padding: '24px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a' }}>
            Holidays ({holidaysData.length})
          </h3>
          <button
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              background: '#1a1a1a',
              color: '#fff',
              fontWeight: 500,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
          >
            + Add Holiday
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {holidaysData.map(holiday => (
            <div key={holiday.id} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 16px',
              background: '#fafafa',
              borderRadius: '8px'
            }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 500, color: '#1a1a1a', marginBottom: '2px' }}>
                  {holiday.name}
                </div>
                <div style={{ fontSize: '13px', color: '#666' }}>
                  {holiday.date}
                </div>
              </div>
              <span style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 500,
                backgroundColor: holiday.type === 'PUBLIC' ? '#1a1a1a' : '#f0f0f0',
                color: holiday.type === 'PUBLIC' ? '#fff' : '#666'
              }}>
                {holiday.type}
              </span>
              <button
                style={{
                  marginLeft: '12px',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: '1px solid #e5e5e5',
                  background: '#fff',
                  fontSize: '13px',
                  color: '#666',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fafafa'
                  e.currentTarget.style.color = '#1a1a1a'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff'
                  e.currentTarget.style.color = '#666'
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompanySettings
